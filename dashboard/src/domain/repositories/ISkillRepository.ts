import { Skill } from '../entities/Skill';

export interface ISkillRepository {
    getAll(): Promise<Skill[]>;
    getById(id: string): Promise<Skill | null>;
    searchByTriggers(userInput: string): Promise<Skill[]>;
    getCategories(): Promise<string[]>;
}
