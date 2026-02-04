import { ISkillRepository } from '@/domain/repositories/ISkillRepository';
import { Skill } from '@/domain/entities/Skill';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export class FileSystemSkillRepository implements ISkillRepository {
    private skillsCache: Skill[] | null = null;
    private skillsByIdCache: Map<string, Skill> = new Map();

    constructor(private readonly rootDir: string) { }

    async getAll(): Promise<Skill[]> {
        if (this.skillsCache) {
            return this.skillsCache;
        }

        const skills: Skill[] = [];
        await this.scanDirectory(this.rootDir, skills);

        // Cache skills
        this.skillsCache = skills;
        this.skillsByIdCache.clear();
        for (const skill of skills) {
            this.skillsByIdCache.set(skill.id, skill);
        }

        return skills;
    }

    async getById(id: string): Promise<Skill | null> {
        // Ensure cache is populated
        await this.getAll();
        return this.skillsByIdCache.get(id) || null;
    }

    async searchByTriggers(userInput: string): Promise<Skill[]> {
        const skills = await this.getAll();
        const inputLower = userInput.toLowerCase();
        const inputWords = inputLower.split(/\s+/).filter(w => w.length > 1);

        const matchedSkills: Array<{ skill: Skill; score: number }> = [];

        for (const skill of skills) {
            let score = 0;

            // Check triggers match
            for (const trigger of skill.triggers) {
                const triggerLower = trigger.toLowerCase();
                if (inputLower.includes(triggerLower)) {
                    score += 10; // Exact trigger phrase match
                } else {
                    // Check partial word matches in trigger
                    const triggerWords = triggerLower.split(/\s+/);
                    for (const inputWord of inputWords) {
                        for (const triggerWord of triggerWords) {
                            if (triggerWord.includes(inputWord) || inputWord.includes(triggerWord)) {
                                score += 3;
                            }
                        }
                    }
                }
            }

            // Check name match
            const nameLower = skill.name.toLowerCase();
            if (inputLower.includes(nameLower)) {
                score += 5;
            } else {
                for (const word of inputWords) {
                    if (nameLower.includes(word)) {
                        score += 2;
                    }
                }
            }

            // Check description match
            const descLower = skill.description.toLowerCase();
            for (const word of inputWords) {
                if (descLower.includes(word)) {
                    score += 1;
                }
            }

            if (score > 0) {
                matchedSkills.push({ skill, score });
            }
        }

        // Sort by score descending and return top matches
        return matchedSkills
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map(m => m.skill);
    }

    async getCategories(): Promise<string[]> {
        const skills = await this.getAll();
        const categories = new Set<string>();
        for (const skill of skills) {
            categories.add(skill.category);
        }
        return Array.from(categories).sort();
    }

    private async scanDirectory(currentPath: string, skills: Skill[], category: string = ''): Promise<void> {
        try {
            const entries = await fs.promises.readdir(currentPath, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = path.join(currentPath, entry.name);

                if (entry.isDirectory()) {
                    // If this is a category folder (direct child of root), pass it as category.
                    // Otherwise, keep existing category or use parent folder name.
                    // For simplicity: Root -> Category -> Skill Folder
                    // If category is empty, this folder is a category.
                    let nextCategory = category;
                    if (!category) {
                        nextCategory = entry.name;
                    }
                    await this.scanDirectory(fullPath, skills, nextCategory);
                } else if (entry.name === 'SKILL.md') {
                    const content = await fs.promises.readFile(fullPath, 'utf-8');
                    const { data, content: body } = matter(content);

                    // ID is the folder name containing SKILL.md
                    const id = path.basename(currentPath);

                    skills.push(new Skill(
                        id,
                        data.name || id,
                        data.description || '',
                        category || 'Uncategorized',
                        data.tags || [],
                        data.triggers || [],
                        body.trim(),
                        fullPath
                    ));
                }
            }
        } catch (error) {
            console.error(`Error scanning directory ${currentPath}:`, error);
            // Ensure we don't crash but return what we found
        }
    }
}
