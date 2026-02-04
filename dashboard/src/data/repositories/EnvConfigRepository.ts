import { IConfigRepository } from '@/domain/repositories/IConfigRepository';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export class EnvConfigRepository implements IConfigRepository {
    private readonly envPath: string;
    private readonly KEY_NAME = 'ANTHROPIC_API_KEY';
    private readonly MODEL_KEY = 'ANTHROPIC_MODEL';
    private readonly DEFAULT_MODEL = 'claude-3-5-sonnet-latest';

    constructor(rootDir: string) {
        this.envPath = path.join(rootDir, '.env.local');
    }

    private async readConfig(): Promise<Record<string, string>> {
        try {
            const content = await fs.promises.readFile(this.envPath, 'utf-8');
            return dotenv.parse(content);
        } catch (error: any) {
            if (error.code === 'ENOENT') {
                return {};
            }
            throw error;
        }
    }

    private async writeConfig(config: Record<string, string>): Promise<void> {
        const newContent = Object.entries(config)
            .map(([k, v]) => `${k}=${v}`)
            .join('\n');
        await fs.promises.writeFile(this.envPath, newContent);
    }

    async getApiKey(): Promise<string | null> {
        const config = await this.readConfig();
        return config[this.KEY_NAME] || null;
    }

    async saveApiKey(key: string): Promise<void> {
        const config = await this.readConfig();
        config[this.KEY_NAME] = key;
        await this.writeConfig(config);
    }

    async getModel(): Promise<string | null> {
        const config = await this.readConfig();
        return config[this.KEY_NAME] ? (config[this.MODEL_KEY] || this.DEFAULT_MODEL) : null;
    }

    async saveModel(model: string): Promise<void> {
        const config = await this.readConfig();
        config[this.MODEL_KEY] = model;
        await this.writeConfig(config);
    }
}
