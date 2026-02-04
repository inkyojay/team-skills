import { OpenAILLMService } from '@/data/repositories/OpenAILLMService';
import { IConfigRepository } from '@/domain/repositories/IConfigRepository';
import OpenAI from 'openai';

// Mock OpenAI
jest.mock('openai');
const MockOpenAI = OpenAI as jest.MockedClass<typeof OpenAI>;

describe('OpenAILLMService', () => {
    let mockConfigRepo: jest.Mocked<IConfigRepository>;

    beforeEach(() => {
        jest.clearAllMocks();
        mockConfigRepo = {
            getApiKey: jest.fn(),
            saveApiKey: jest.fn()
        };

        // Default mock implementation to avoid crashes
        MockOpenAI.mockImplementation(() => ({
            chat: {
                completions: {
                    create: jest.fn().mockResolvedValue({
                        choices: [{ message: { content: 'Default Response' } }]
                    })
                }
            }
        } as any));
    });

    it('should initialize OpenAI client with key from repository', async () => {
        // Arrange
        const apiKey = 'sk-test-key';
        mockConfigRepo.getApiKey.mockResolvedValue(apiKey);

        // Act
        const service = new OpenAILLMService(mockConfigRepo);
        await service.generate('test');

        // Assert
        expect(MockOpenAI).toHaveBeenCalledWith({ apiKey, dangerouslyAllowBrowser: true });
    });

    it('should throw error if api key is missing', async () => {
        // Arrange
        mockConfigRepo.getApiKey.mockResolvedValue(null);

        // Act & Assert
        const service = new OpenAILLMService(mockConfigRepo);
        await expect(service.generate('test')).rejects.toThrow('API Key Not Found');
    });

    it('should generate text using chat completion', async () => {
        // Arrange
        mockConfigRepo.getApiKey.mockResolvedValue('key');
        const mockCreate = jest.fn().mockResolvedValue({
            choices: [{ message: { content: 'Generated Response' } }]
        });

        // Override mock for this specific test
        MockOpenAI.mockImplementation(() => ({
            chat: { completions: { create: mockCreate } }
        } as any));

        const service = new OpenAILLMService(mockConfigRepo);

        // Act
        const result = await service.generate('Hello');

        // Assert
        expect(result).toBe('Generated Response');
        expect(mockCreate).toHaveBeenCalledWith(expect.objectContaining({
            messages: [
                { role: 'system', content: expect.any(String) },
                { role: 'user', content: 'Hello' }
            ]
        }));
    });
});
