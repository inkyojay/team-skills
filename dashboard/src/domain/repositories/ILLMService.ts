export interface ILLMService {
    generate(prompt: string, context?: string): Promise<string>;
}
