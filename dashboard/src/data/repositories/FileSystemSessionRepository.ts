import { ISessionRepository, ChatSession, ChatMessage } from '@/domain/repositories/ISessionRepository';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export class FileSystemSessionRepository implements ISessionRepository {
    private readonly sessionsDir: string;

    constructor(baseDir: string) {
        this.sessionsDir = path.join(baseDir, 'data', 'sessions');
        if (!fs.existsSync(this.sessionsDir)) {
            fs.mkdirSync(this.sessionsDir, { recursive: true });
        }
    }

    private getFilePath(sessionId: string): string {
        return path.join(this.sessionsDir, `${sessionId}.json`);
    }

    async createSession(title: string = 'New Chat'): Promise<ChatSession> {
        const id = uuidv4();
        const session: ChatSession = {
            id,
            title,
            messages: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        await fs.promises.writeFile(this.getFilePath(id), JSON.stringify(session, null, 2));
        return session;
    }

    async getSession(id: string): Promise<ChatSession | null> {
        try {
            const filePath = this.getFilePath(id);
            const content = await fs.promises.readFile(filePath, 'utf-8');
            return JSON.parse(content);
        } catch (error: any) {
            if (error.code === 'ENOENT') return null;
            throw error;
        }
    }

    async getAllSessions(): Promise<ChatSession[]> {
        try {
            const files = await fs.promises.readdir(this.sessionsDir);
            const sessions: ChatSession[] = [];

            for (const file of files) {
                if (file.endsWith('.json')) {
                    const content = await fs.promises.readFile(path.join(this.sessionsDir, file), 'utf-8');
                    try {
                        sessions.push(JSON.parse(content));
                    } catch (e) {
                        console.error(`Failed to parse session file ${file}:`, e);
                    }
                }
            }

            // Sort by updatedAt desc
            return sessions.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        } catch (error) {
            return [];
        }
    }

    async addMessage(sessionId: string, message: Omit<ChatMessage, 'id' | 'timestamp'>): Promise<void> {
        const session = await this.getSession(sessionId);
        if (!session) throw new Error(`Session ${sessionId} not found`);

        const newMessage: ChatMessage = {
            ...message,
            id: uuidv4(),
            timestamp: new Date().toISOString(),
        };

        session.messages.push(newMessage);
        session.updatedAt = new Date().toISOString();

        // Auto-update title if it's the first user message and title is default
        if (session.messages.length === 1 && session.title === 'New Chat' && message.role === 'user') {
            session.title = message.content.substring(0, 30) + (message.content.length > 30 ? '...' : '');
        }

        await fs.promises.writeFile(this.getFilePath(sessionId), JSON.stringify(session, null, 2));
    }

    async updateTitle(sessionId: string, title: string): Promise<void> {
        const session = await this.getSession(sessionId);
        if (!session) throw new Error(`Session ${sessionId} not found`);

        session.title = title;
        session.updatedAt = new Date().toISOString();
        await fs.promises.writeFile(this.getFilePath(sessionId), JSON.stringify(session, null, 2));
    }

    async deleteSession(sessionId: string): Promise<void> {
        const filePath = this.getFilePath(sessionId);
        try {
            await fs.promises.unlink(filePath);
        } catch (error: any) {
            if (error.code !== 'ENOENT') throw error;
        }
    }
}
