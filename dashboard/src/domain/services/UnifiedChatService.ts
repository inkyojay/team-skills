import { ISessionRepository } from '@/domain/repositories/ISessionRepository';
import { ExecuteSkill } from '@/domain/usecases/ExecuteSkill';
import { ChatMessage } from '@/domain/repositories/ISessionRepository';

export class UnifiedChatService {
    constructor(
        private readonly sessionRepo: ISessionRepository,
        private readonly executeSkill: ExecuteSkill
    ) { }

    async createNewSession(): Promise<string> {
        const session = await this.sessionRepo.createSession();
        return session.id;
    }

    async getSessionHistory(sessionId: string) {
        return this.sessionRepo.getSession(sessionId);
    }

    async getAllSessions() {
        return this.sessionRepo.getAllSessions();
    }

    async sendMessage(
        sessionId: string,
        content: string,
        skillId?: string
    ): Promise<ChatMessage> {
        const userMsg: Omit<ChatMessage, 'id' | 'timestamp'> = {
            role: 'user',
            content,
            skillId
        };

        // Save user message
        await this.sessionRepo.addMessage(sessionId, userMsg);

        // If a skill is selected, execute it
        let responseContent = 'Echo: ' + content;
        if (skillId) {
            try {
                // We need to pass conversation history context to the skill execution?
                // Current ExecuteSkill usecase might be simple.
                // Let's modify ExecuteSkill slightly or just pass context string constructed from history.
                // For now, simple prompt.
                const session = await this.sessionRepo.getSession(sessionId);
                const history = session?.messages.map(m => `${m.role}: ${m.content}`).join('\n') || '';

                responseContent = await this.executeSkill.execute(skillId, content, history);
            } catch (e: any) {
                responseContent = `Error executing skill: ${e.message}`;
            }
        } else {
            responseContent = "스킬을 선택해주세요. (Please select a skill)";
        }

        const assistantMsg: Omit<ChatMessage, 'id' | 'timestamp'> = {
            role: 'assistant',
            content: responseContent,
            skillId
        };

        await this.sessionRepo.addMessage(sessionId, assistantMsg);

        // Return the assistant message so UI can update optimistically or wait for reload
        // But we need the ID, so fetch the last message from session?
        // Or just return what we have (ID will be generated in repo).
        // Let's fetch session again or return constructed object.

        return {
            ...assistantMsg,
            id: 'temp',
            timestamp: new Date().toISOString()
        };
    }

    async deleteSession(sessionId: string): Promise<void> {
        await this.sessionRepo.deleteSession(sessionId);
    }
}
