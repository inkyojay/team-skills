import { ISkillRepository } from '../repositories/ISkillRepository';
import { ILLMService } from '../repositories/ILLMService';

export class ExecuteSkill {
    constructor(
        private readonly skillRepository: ISkillRepository,
        private readonly llmService: ILLMService
    ) { }

    async execute(skillId: string, prompt: string, history?: string): Promise<string> {
        let context = '';

        if (skillId) {
            const skill = await this.skillRepository.getById(skillId);
            if (!skill) {
                throw new Error(`Skill not found: ${skillId}`);
            }

            // Include full skill body in context for better LLM understanding
            context = `=== SKILL: ${skill.name} ===
Category: ${skill.category}
Description: ${skill.description}

=== SKILL INSTRUCTIONS ===
${skill.body}
=== END ===`;
        } else {
            // General chat or routing? For now list skills
            const skills = await this.skillRepository.getAll();
            context = 'Available Skills:\n' + skills.map(s => `- ${s.name} (${s.id})`).join('\n');
        }

        if (history) {
            context += `\n\nPrevious Conversation History:\n${history}`;
        }

        return this.llmService.generate(prompt, context);
    }
}
