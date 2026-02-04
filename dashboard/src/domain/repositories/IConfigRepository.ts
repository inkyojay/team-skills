export interface IConfigRepository {
    getApiKey(): Promise<string | null>;
    saveApiKey(key: string): Promise<void>;
    getModel(): Promise<string | null>;
    saveModel(model: string): Promise<void>;
}
