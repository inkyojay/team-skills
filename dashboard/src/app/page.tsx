'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '@/presentation/components/Layout';
import { HistorySidebar } from '@/presentation/components/HistorySidebar';
import { OutputViewer } from '@/presentation/components/OutputViewer';
import { SkillSelector } from '@/presentation/components/SkillSelector';
import { SkillSuggestionBanner } from '@/presentation/components/SkillSuggestionBanner';
import { ChatInterface } from '@/presentation/components/ChatInterface';
import { SettingsModal } from '@/presentation/components/SettingsModal';
import { Settings, Loader2 } from 'lucide-react';
import { Skill } from '@/domain/entities/Skill';
import { ChatSession, ChatMessage } from '@/domain/repositories/ISessionRepository';

export default function WorkbenchPage() {
  const router = useRouter();

  // State
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [chatLoading, setChatLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Skill suggestion state
  const [suggestedSkills, setSuggestedSkills] = useState<Skill[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  // Initial Load
  useEffect(() => {
    Promise.all([
      fetch('/api/skills').then(res => res.json()),
      fetch('/api/sessions').then(res => res.json())
    ]).then(([skillsData, sessionsData]) => {
      setSkills(skillsData);
      setSessions(sessionsData);
      setLoading(false);

      // Auto-select most recent session if exists
      if (sessionsData.length > 0) {
        selectSession(sessionsData[0].id);
      } else {
        createNewSession();
      }
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const selectSession = useCallback(async (sessionId: string) => {
    setActiveSessionId(sessionId);
    // Fetch details (messages)
    try {
      const res = await fetch(`/api/sessions/${sessionId}`);
      if (res.ok) {
        const session: ChatSession = await res.json();
        setMessages(session.messages);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const createNewSession = async () => {
    try {
      const res = await fetch('/api/sessions', { method: 'POST' });
      const data = await res.json();
      const newSessionId = data.id;

      // Refresh session list
      const sessionsRes = await fetch('/api/sessions');
      const sessionsData = await sessionsRes.json();
      setSessions(sessionsData);

      selectSession(newSessionId);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteSession = async (sessionId: string) => {
    try {
      await fetch(`/api/sessions/${sessionId}`, { method: 'DELETE' });
      const sessionsRes = await fetch('/api/sessions');
      const sessionsData = await sessionsRes.json();
      setSessions(sessionsData);

      if (activeSessionId === sessionId) {
        if (sessionsData.length > 0) {
          selectSession(sessionsData[0].id);
        } else {
          setMessages([]);
          setActiveSessionId(null);
          createNewSession();
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!activeSessionId) return;

    // Optimistic UI update
    const tempUserMsg: ChatMessage = {
      id: 'temp-user-' + Date.now(),
      role: 'user',
      content,
      skillId: activeSkillId || undefined,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, tempUserMsg]);
    setChatLoading(true);

    try {
      const res = await fetch(`/api/sessions/${activeSessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, skillId: activeSkillId })
      });

      if (res.ok) {
        const assistantMsg: ChatMessage = await res.json();
        // Replace temp message? Actually just append.
        // We should reload session to get exact state or just append returned msg.
        // Appending returned msg is faster.
        // But we need to sync session list as title might have changed.
        setMessages(prev => [...prev, assistantMsg]);

        // Refresh session list quietly to update titles/timestamp
        fetch('/api/sessions').then(r => r.json()).then(setSessions);
      }
    } catch (e) {
      console.error(e);
      // TODO: Show error toast
    } finally {
      setChatLoading(false);
    }
  };

  // Handle input change for skill suggestions (client-side, no API call)
  // NOTE: Must be defined before any conditional returns to maintain hooks order
  const handleInputChange = useCallback((input: string) => {
    // Only suggest if no skill is selected and input is long enough
    if (activeSkillId || input.length < 3) {
      setSuggestedSkills([]);
      return;
    }

    // Client-side filtering - instant, no API call needed
    const inputLower = input.toLowerCase();
    const inputWords = inputLower.split(/\s+/).filter(w => w.length > 1);

    const scored = skills.map(skill => {
      let score = 0;

      // Check triggers match
      for (const trigger of (skill.triggers || [])) {
        const triggerLower = trigger.toLowerCase();
        if (inputLower.includes(triggerLower)) {
          score += 10;
        } else {
          const triggerWords = triggerLower.split(/\s+/);
          for (const inputWord of inputWords) {
            for (const triggerWord of triggerWords) {
              if (triggerWord.includes(inputWord) || inputWord.includes(triggerWord)) {
                score += 3;
              }
            }
          }
        }
      }

      // Check name match
      const nameLower = skill.name.toLowerCase();
      if (inputLower.includes(nameLower)) {
        score += 5;
      } else {
        for (const word of inputWords) {
          if (nameLower.includes(word)) score += 2;
        }
      }

      // Check description match
      const descLower = (skill.description || '').toLowerCase();
      for (const word of inputWords) {
        if (descLower.includes(word)) score += 1;
      }

      return { skill, score };
    });

    const suggestions = scored
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(s => s.skill);

    setSuggestedSkills(suggestions);
    setShowSuggestions(suggestions.length > 0);
  }, [activeSkillId, skills]);

  const handleSuggestionSelect = useCallback((skillId: string) => {
    setActiveSkillId(skillId);
    setSuggestedSkills([]);
  }, []);

  const handleDismissSuggestions = useCallback(() => {
    setShowSuggestions(false);
    setSuggestedSkills([]);
  }, []);

  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-gray-950 text-blue-500"><Loader2 className="animate-spin" /></div>;
  }

  const activeSkill = skills.find(s => s.id === activeSkillId);

  return (
    <Layout
      sidebar={
        <HistorySidebar
          sessions={sessions}
          activeSessionId={activeSessionId}
          onSelectSession={selectSession}
          onNewChat={createNewSession}
          onDeleteSession={deleteSession}
        />
      }
      rightPanel={
        <div className="flex flex-col h-full bg-gray-900/50">
          <div className="p-3 border-b border-white/5 font-semibold text-sm">
            최근 결과물 (Recent Outputs)
          </div>
          <div className="flex-1 overflow-hidden">
            <OutputViewer />
          </div>
        </div>
      }
    >
      {/* Header */}
      <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-gray-900/30 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
          <SkillSelector
            skills={skills}
            activeSkillId={activeSkillId}
            onSelectSkill={setActiveSkillId}
          />
        </div>
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
        >
          <Settings size={20} />
        </button>
      </header>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-hidden p-4 relative flex flex-col">
        {/* Skill Suggestion Banner */}
        {showSuggestions && suggestedSkills.length > 0 && !activeSkillId && (
          <SkillSuggestionBanner
            suggestions={suggestedSkills}
            onSelectSkill={handleSuggestionSelect}
            onDismiss={handleDismissSuggestions}
          />
        )}

        <div className="flex-1 overflow-hidden">
          <ChatInterface
            messages={messages}
            onSendMessage={handleSendMessage}
            onInputChange={handleInputChange}
            isLoading={chatLoading}
            activeSkillName={activeSkill?.name}
          />
        </div>
      </div>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </Layout>
  );
}
