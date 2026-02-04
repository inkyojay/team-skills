import { ISkillRepository } from '../repositories/ISkillRepository';
import { Skill } from '../entities/Skill';

export class GetAllSkills {
    constructor(private skillRepository: ISkillRepository) { }

    async execute(): Promise<Skill[]> {
        return this.skillRepository.getAll();
    }
}
