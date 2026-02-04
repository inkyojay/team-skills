import { Skill } from '../entities/Skill';

export interface ISkillRepository {
    getAll(): Promise<Skill[]>;
}
