import { FileSystemSkillRepository } from '@/data/repositories/FileSystemSkillRepository';
import { EnvConfigRepository } from '@/data/repositories/EnvConfigRepository';
import { AnthropicLLMService } from '@/data/repositories/AnthropicLLMService';
import { FileSystemSessionRepository } from '@/data/repositories/FileSystemSessionRepository';
import { GetAllSkills } from '@/domain/usecases/GetAllSkills';
import { GetSkillDetail } from '@/domain/usecases/GetSkillDetail';
import { SuggestSkills } from '@/domain/usecases/SuggestSkills';
import { GetCategories } from '@/domain/usecases/GetCategories';
import { ExecuteSkill } from '@/domain/usecases/ExecuteSkill';
import { UnifiedChatService } from '@/domain/services/UnifiedChatService';
import path from 'path';

// Singleton instance to reuse connections/configs
class DIContainer {
    private static instance: DIContainer;

    public readonly getAllSkills: GetAllSkills;
    public readonly getSkillDetail: GetSkillDetail;
    public readonly suggestSkills: SuggestSkills;
    public readonly getCategories: GetCategories;
    public readonly executeSkill: ExecuteSkill;
    public readonly chatService: UnifiedChatService;

    private constructor() {
        const rootDir = process.cwd();
        // Assuming 'skills' is at the project root, which is parent of 'dashboard'
        const skillsDir = path.resolve(rootDir, '../skills');
        const projectRoot = path.resolve(rootDir, '..'); // For .env.local

        const skillRepo = new FileSystemSkillRepository(skillsDir);
        const configRepo = new EnvConfigRepository(projectRoot);
        const sessionRepo = new FileSystemSessionRepository(rootDir); // data/sessions inside dashboard

        const llmService = new AnthropicLLMService(configRepo);

        this.getAllSkills = new GetAllSkills(skillRepo);
        this.getSkillDetail = new GetSkillDetail(skillRepo);
        this.suggestSkills = new SuggestSkills(skillRepo);
        this.getCategories = new GetCategories(skillRepo);
        this.executeSkill = new ExecuteSkill(skillRepo, llmService);
        this.chatService = new UnifiedChatService(sessionRepo, this.executeSkill);
    }

    public static getInstance(): DIContainer {
        if (!DIContainer.instance) {
            DIContainer.instance = new DIContainer();
        }
        return DIContainer.instance;
    }
}

export const container = DIContainer.getInstance();
