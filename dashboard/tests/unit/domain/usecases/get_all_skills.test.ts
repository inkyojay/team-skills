import { GetAllSkills } from '@/domain/usecases/GetAllSkills';
import { ISkillRepository } from '@/domain/repositories/ISkillRepository';
import { Skill } from '@/domain/entities/Skill';

// Mock Repository
class MockSkillRepository implements ISkillRepository {
    async getAll(): Promise<Skill[]> {
        return [
            new Skill('test-skill', 'Test Skill', 'Description', 'Category', [])
        ];
    }
    async getById(): Promise<Skill | null> {
        return null;
    }
    async searchByTriggers(): Promise<Skill[]> {
        return [];
    }
    async getCategories(): Promise<string[]> {
        return [];
    }
}

describe('GetAllSkills Use Case', () => {
    it('should return a list of skills from the repository', async () => {
        // Arrange
        const mockRepo = new MockSkillRepository();
        const useCase = new GetAllSkills(mockRepo);

        // Act
        const skills = await useCase.execute();

        // Assert
        expect(skills).toHaveLength(1);
        expect(skills[0].id).toBe('test-skill');
        expect(skills[0].name).toBe('Test Skill');
    });
});
