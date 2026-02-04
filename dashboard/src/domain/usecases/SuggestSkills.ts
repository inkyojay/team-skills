import { ISkillRepository } from '../repositories/ISkillRepository';
import { Skill } from '../entities/Skill';

export class SuggestSkills {
    constructor(private skillRepository: ISkillRepository) { }

    async execute(userInput: string): Promise<Skill[]> {
        if (!userInput || userInput.trim().length < 2) {
            return [];
        }
        return this.skillRepository.searchByTriggers(userInput);
    }
}
