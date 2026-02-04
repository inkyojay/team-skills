import React from 'react';
import { Plus, MessageSquare, Trash2 } from 'lucide-react';
import { ChatSession } from '@/domain/repositories/ISessionRepository';

interface HistorySidebarProps {
    sessions: ChatSession[];
    activeSessionId: string | null;
    onSelectSession: (id: string) => void;
    onNewChat: () => void;
    onDeleteSession: (id: string) => void;
}

export const HistorySidebar: React.FC<HistorySidebarProps> = ({
    sessions,
    activeSessionId,
    onSelectSession,
    onNewChat,
    onDeleteSession
}) => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-4 border-b border-white/5">
                <button
                    onClick={onNewChat}
                    className="w-full flex items-center gap-2 justify-center bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/20 font-medium text-sm"
                >
                    <Plus size={16} />
                    새 채팅 (New Chat)
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                {sessions.length === 0 && (
                    <div className="text-center text-gray-500 text-xs mt-10">
                        기록된 대화가 없습니다.
                    </div>
                )}

                {sessions.map(session => (
                    <div
                        key={session.id}
                        className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border border-transparent
              ${activeSessionId === session.id
                                ? 'bg-white/10 border-white/5 text-white shadow-sm'
                                : 'hover:bg-white/5 text-gray-400 hover:text-gray-200'}`}
                        onClick={() => onSelectSession(session.id)}
                    >
                        <MessageSquare size={16} className="shrink-0 opacity-70" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{session.title}</p>
                            <p className="text-xs opacity-50 truncate">
                                {new Date(session.updatedAt).toLocaleDateString()}
                            </p>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (confirm('이 채팅방을 삭제하시겠습니까?')) onDeleteSession(session.id);
                            }}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/20 hover:text-red-400 rounded transition-all"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t border-white/5 text-xs text-gray-600 text-center">
                TEAM SKILLS v1.0
            </div>
        </div>
    );
};
