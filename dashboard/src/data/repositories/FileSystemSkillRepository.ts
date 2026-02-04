import { ISkillRepository } from '@/domain/repositories/ISkillRepository';
import { Skill } from '@/domain/entities/Skill';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export class FileSystemSkillRepository implements ISkillRepository {
    constructor(private readonly rootDir: string) { }

    async getAll(): Promise<Skill[]> {
        const skills: Skill[] = [];
        await this.scanDirectory(this.rootDir, skills);
        return skills;
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
                    const { data } = matter(content);

                    // ID is the folder name containing SKILL.md
                    const id = path.basename(currentPath);

                    skills.push(new Skill(
                        id,
                        data.name || id,
                        data.description || '',
                        category || 'Uncategorized',
                        data.tags || []
                    ));
                }
            }
        } catch (error) {
            console.error(`Error scanning directory ${currentPath}:`, error);
            // Ensure we don't crash but return what we found
        }
    }
}
