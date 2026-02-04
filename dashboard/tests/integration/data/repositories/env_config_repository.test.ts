import { EnvConfigRepository } from '@/data/repositories/EnvConfigRepository';
import fs from 'fs';
import path from 'path';

// Mock fs
jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn(),
        writeFile: jest.fn(),
        access: jest.fn()
    },
    constants: {
        F_OK: 0
    }
}));
jest.mock('path');

describe('EnvConfigRepository', () => {
    const mockRootDir = '/mock/root';
    const mockEnvPath = '/mock/root/.env.local';

    beforeEach(() => {
        jest.clearAllMocks();
        (path.resolve as jest.Mock).mockReturnValue(mockRootDir);
        (path.join as jest.Mock).mockReturnValue(mockEnvPath);
    });

    it('should return null if api key is not found in .env.local', async () => {
        // Arrange
        (fs.promises.readFile as jest.Mock).mockRejectedValue({ code: 'ENOENT' });
        const repo = new EnvConfigRepository(mockRootDir);

        // Act
        const key = await repo.getApiKey();

        // Assert
        expect(key).toBeNull();
    });

    it('should return api key if it exist in .env.local', async () => {
        // Arrange
        (fs.promises.readFile as jest.Mock).mockResolvedValue('ANTHROPIC_API_KEY=sk-test-123\nOTHER=value');
        const repo = new EnvConfigRepository(mockRootDir);

        // Act
        const key = await repo.getApiKey();

        // Assert
        expect(key).toBe('sk-test-123');
    });

    it('should save api key to .env.local', async () => {
        // Arrange
        // Case 1: File doesn't exist
        (fs.promises.readFile as jest.Mock).mockRejectedValue({ code: 'ENOENT' });
        const writeFileMock = fs.promises.writeFile as jest.Mock;
        const repo = new EnvConfigRepository(mockRootDir);

        // Act
        await repo.saveApiKey('sk-new-key');

        // Assert
        expect(writeFileMock).toHaveBeenCalledWith(
            mockEnvPath,
            expect.stringContaining('ANTHROPIC_API_KEY=sk-new-key')
        );
    });

    it('should update existing api key in .env.local', async () => {
        // Arrange
        (fs.promises.readFile as jest.Mock).mockResolvedValue('EXISTING=foo\nANTHROPIC_API_KEY=old-key');
        const writeFileMock = fs.promises.writeFile as jest.Mock;
        const repo = new EnvConfigRepository(mockRootDir);

        // Act
        await repo.saveApiKey('sk-updated-key');

        // Assert
        // Should preserve other keys and update the target key
        expect(writeFileMock).toHaveBeenCalledWith(
            mockEnvPath,
            expect.stringContaining('EXISTING=foo')
        );
        expect(writeFileMock).toHaveBeenCalledWith(
            mockEnvPath,
            expect.stringContaining('ANTHROPIC_API_KEY=sk-updated-key')
        );
    });
});
