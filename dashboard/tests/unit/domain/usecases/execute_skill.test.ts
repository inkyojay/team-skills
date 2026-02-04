import { ExecuteSkill } from '@/domain/usecases/ExecuteSkill';
import { ISkillRepository } from '@/domain/repositories/ISkillRepository';
import { ILLMService } from '@/domain/repositories/ILLMService';
import { Skill } from '@/domain/entities/Skill';

describe('ExecuteSkill Use Case', () => {
    let mockSkillRepo: jest.Mocked<ISkillRepository>;
    let mockLLMService: jest.Mocked<ILLMService>;

    beforeEach(() => {
        mockSkillRepo = {
            getAll: jest.fn()
        };
        mockLLMService = {
            generate: jest.fn()
        };
    });

    it('should execute a specific skill by ID with user prompt', async () => {
        // Arrange
        const skill = new Skill('skill-1', 'Test Skill', 'Description', 'Category', []);
        mockSkillRepo.getAll.mockResolvedValue([skill]);
        mockLLMService.generate.mockResolvedValue('Generated Content');

        const useCase = new ExecuteSkill(mockSkillRepo, mockLLMService);

        // Act
        const result = await useCase.execute('Make this', 'skill-1');

        // Assert
        expect(result).toBe('Generated Content');
        expect(mockLLMService.generate).toHaveBeenCalledWith(
            'Make this',
            expect.stringContaining('Test Skill') // Context should contain skill details
        );
    });

    it('should include all skills in context if no skill ID provided', async () => {
        // Arrange
        const skill1 = new Skill('s1', 'Skill 1', 'Desc 1', 'Cat', []);
        const skill2 = new Skill('s2', 'Skill 2', 'Desc 2', 'Cat', []);
        mockSkillRepo.getAll.mockResolvedValue([skill1, skill2]);
        mockLLMService.generate.mockResolvedValue('Response');

        const useCase = new ExecuteSkill(mockSkillRepo, mockLLMService);

        // Act
        await useCase.execute('General query');

        // Assert
        expect(mockLLMService.generate).toHaveBeenCalledWith(
            'General query',
            expect.stringMatching(/Skill 1.*Skill 2/s)
        );
    });

    it('should throw error if specific skill not found', async () => {
        mockSkillRepo.getAll.mockResolvedValue([]);
        const useCase = new ExecuteSkill(mockSkillRepo, mockLLMService);

        await expect(useCase.execute('prompt', 'missing-id'))
            .rejects.toThrow('Skill not found');
    });
});
