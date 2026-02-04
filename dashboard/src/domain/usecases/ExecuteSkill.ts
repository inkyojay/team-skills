import { ISkillRepository } from '../repositories/ISkillRepository';
import { ILLMService } from '../repositories/ILLMService';

export class ExecuteSkill {
    constructor(
        private readonly skillRepository: ISkillRepository,
        private readonly llmService: ILLMService
    ) { }

    async execute(skillId: string, prompt: string, history?: string): Promise<string> {
        const skills = await this.skillRepository.getAll();
        let context = '';

        if (skillId) {
            const skill = skills.find(s => s.id === skillId);
            if (!skill) {
                throw new Error(`Skill not found: ${skillId}`);
            }
            context = `Selected Skill: ${skill.name}\nDescription: ${skill.description}\nCategory: ${skill.category}`;
        } else {
            // General chat or routing? For now list skills
            context = 'Available Skills:\n' + skills.map(s => `- ${s.name} (${s.id})`).join('\n');
        }

        if (history) {
            context += `\n\nPrevious Conversation History:\n${history}`;
        }

        return this.llmService.generate(prompt, context);
    }
}
