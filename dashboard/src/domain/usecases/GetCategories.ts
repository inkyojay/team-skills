import { ISkillRepository } from '../repositories/ISkillRepository';

export class GetCategories {
    constructor(private skillRepository: ISkillRepository) { }

    async execute(): Promise<string[]> {
        return this.skillRepository.getCategories();
    }
}
