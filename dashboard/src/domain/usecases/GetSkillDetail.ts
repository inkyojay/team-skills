import { ISkillRepository } from '../repositories/ISkillRepository';
import { Skill } from '../entities/Skill';

export class GetSkillDetail {
    constructor(private skillRepository: ISkillRepository) { }

    async execute(skillId: string): Promise<Skill | null> {
        return this.skillRepository.getById(skillId);
    }
}
