// Definitions for Chat Entities

export interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    skillId?: string; // Which skill generated this, or which skill was active
    timestamp: string;
}

export interface ChatSession {
    id: string;
    title: string;
    messages: ChatMessage[];
    createdAt: string;
    updatedAt: string;
}

export interface ISessionRepository {
    createSession(title?: string): Promise<ChatSession>;
    getSession(id: string): Promise<ChatSession | null>;
    getAllSessions(): Promise<ChatSession[]>;
    addMessage(sessionId: string, message: Omit<ChatMessage, 'id' | 'timestamp'>): Promise<void>;
    updateTitle(sessionId: string, title: string): Promise<void>;
    deleteSession(sessionId: string): Promise<void>;
}
