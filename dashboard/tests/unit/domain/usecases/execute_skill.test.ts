import { ExecuteSkill } from '@/domain/usecases/ExecuteSkill';
import { ISkillRepository } from '@/domain/repositories/ISkillRepository';
import { ILLMService } from '@/domain/repositories/ILLMService';
import { Skill } from '@/domain/entities/Skill';

describe('ExecuteSkill Use Case', () => {
    let mockSkillRepo: jest.Mocked<ISkillRepository>;
    let mockLLMService: jest.Mocked<ILLMService>;

    beforeEach(() => {
        mockSkillRepo = {
            getAll: jest.fn(),
            getById: jest.fn(),
            searchByTriggers: jest.fn(),
            getCategories: jest.fn(),
        };
        mockLLMService = {
            generate: jest.fn()
        };
    });

    it('should execute a specific skill by ID with user prompt', async () => {
        // Arrange
        const skill = new Skill('skill-1', 'Test Skill', 'Description', 'Category', []);
        mockSkillRepo.getById.mockResolvedValue(skill);
        mockLLMService.generate.mockResolvedValue('Generated Content');

        const useCase = new ExecuteSkill(mockSkillRepo, mockLLMService);

        // Act
        const result = await useCase.execute('skill-1', 'Make this');

        // Assert
        expect(result).toBe('Generated Content');
        expect(mockSkillRepo.getById).toHaveBeenCalledWith('skill-1');
        expect(mockLLMService.generate).toHaveBeenCalledWith(
            'Make this',
            expect.stringContaining('Test Skill')
        );
    });

    it('should include all skills in context if no skill ID provided', async () => {
        // Arrange
        const skill1 = new Skill('s1', 'Skill 1', 'Desc 1', 'Cat', []);
        const skill2 = new Skill('s2', 'Skill 2', 'Desc 2', 'Cat', []);
        mockSkillRepo.getAll.mockResolvedValue([skill1, skill2]);
        mockLLMService.generate.mockResolvedValue('Response');

        const useCase = new ExecuteSkill(mockSkillRepo, mockLLMService);

        // Act - empty skillId triggers getAll path
        await useCase.execute('', 'General query');

        // Assert
        expect(mockSkillRepo.getAll).toHaveBeenCalled();
        expect(mockLLMService.generate).toHaveBeenCalledWith(
            'General query',
            expect.stringContaining('Skill 1')
        );
    });

    it('should throw error if specific skill not found', async () => {
        mockSkillRepo.getById.mockResolvedValue(null);
        const useCase = new ExecuteSkill(mockSkillRepo, mockLLMService);

        await expect(useCase.execute('missing-id', 'prompt'))
            .rejects.toThrow('Skill not found');
    });
});
