import { ILLMService } from '@/domain/repositories/ILLMService';
import { IConfigRepository } from '@/domain/repositories/IConfigRepository';
import Anthropic from '@anthropic-ai/sdk';

export class AnthropicLLMService implements ILLMService {
    private client: Anthropic | null = null;
    // Fallback default if not set in config
    private readonly DEFAULT_MODEL = 'claude-3-5-sonnet-latest';

    constructor(private readonly configRepo: IConfigRepository) { }

    private async getClient(): Promise<Anthropic> {
        if (this.client) return this.client;

        const apiKey = await this.configRepo.getApiKey();
        if (!apiKey) {
            throw new Error('API Key Not Found');
        }

        this.client = new Anthropic({
            apiKey,
            // dangerouslyAllowBrowser is not typically needed for server-side Node execution unless we are running in browser context.
            // Since this is Next.js API route (server-side), we don't strictly need it unless we use edge runtime?
            // But adding it just in case if the SDK complains in dev mode, similar to OpenAI. But Anthropic SDK behaves differently.
            // Let's stick to default.
        });

        return this.client;
    }

    async generate(prompt: string, context?: string): Promise<string> {
        const client = await this.getClient();
        const model = await this.configRepo.getModel() || this.DEFAULT_MODEL;

        const systemPrompt = `You are a helpful assistant for the Team Skills Dashboard.
    Your goal is to help users execute skills.
    
    Context of available skills:
    ${context || 'No specific skills loaded.'}`;

        const message = await client.messages.create({
            model: model,
            max_tokens: 4096,
            system: systemPrompt,
            messages: [
                { role: 'user', content: prompt }
            ]
        });

        // ContentBlock can be text or image. We assume text for now.
        const textContent = message.content.find(block => block.type === 'text');
        return textContent && textContent.type === 'text' ? textContent.text : '';
    }
}
