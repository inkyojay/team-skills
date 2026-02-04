import { FileSystemSkillRepository } from '@/data/repositories/FileSystemSkillRepository';
import path from 'path';
import fs from 'fs';

// Explicitly mock fs to include promises
jest.mock('fs', () => ({
    promises: {
        readdir: jest.fn(),
        readFile: jest.fn(),
    }
}));
jest.mock('path');

describe('FileSystemSkillRepository', () => {
    const mockSkillsDir = '/mock/skills';

    beforeEach(() => {
        jest.clearAllMocks();
        (path.resolve as jest.Mock).mockReturnValue(mockSkillsDir);
        (path.join as jest.Mock).mockImplementation((...args) => args.join('/'));
        // Mock path.basename
        (path.basename as jest.Mock).mockImplementation((path) => path.split('/').pop());
    });

    it('should find skills in subdirectories with SKILL.md', async () => {
        // Arrange
        (fs.promises.readdir as jest.Mock).mockImplementation(async (dirPath) => {
            // Return simplified Dirent-like objects
            const createDirent = (name: string, isDir: boolean) => ({
                name,
                isDirectory: () => isDir,
                isFile: () => !isDir
            });

            if (dirPath === mockSkillsDir) {
                return [createDirent('category1', true)];
            }
            if (dirPath === `${mockSkillsDir}/category1`) {
                return [createDirent('skill1', true)];
            }
            if (dirPath === `${mockSkillsDir}/category1/skill1`) {
                return [createDirent('SKILL.md', false)];
            }
            return [];
        });

        (fs.promises.readFile as jest.Mock).mockResolvedValue(`---
name: Mock Skill
description: A mock skill for testing
tags: [test, mock]
---
# Skill Content`);

        const repo = new FileSystemSkillRepository(mockSkillsDir);

        // Act
        const skills = await repo.getAll();

        // Assert
        expect(skills).toHaveLength(1);
        expect(skills[0].id).toBe('skill1');
        expect(skills[0].name).toBe('Mock Skill');
        expect(skills[0].category).toBe('category1');
    });
});
