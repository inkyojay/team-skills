import React, { useState } from 'react';
import { Skill } from '@/domain/entities/Skill';
import { ChevronDown, Search, Cpu } from 'lucide-react';

interface SkillSelectorProps {
    skills: Skill[];
    activeSkillId: string | null;
    onSelectSkill: (skillId: string) => void;
}

export const SkillSelector: React.FC<SkillSelectorProps> = ({ skills, activeSkillId, onSelectSkill }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const activeSkill = skills.find(s => s.id === activeSkillId);

    const filteredSkills = skills.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm group"
            >
                <div className={`w-2 h-2 rounded-full ${activeSkill ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-gray-500'}`} />
                <span className="text-gray-300 group-hover:text-white">
                    {activeSkill ? activeSkill.name : '스킬 선택 (Select Skill)'}
                </span>
                <ChevronDown size={14} className="text-gray-500 group-hover:text-gray-300" />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
                        <div className="p-2 border-b border-white/5">
                            <div className="flex items-center bg-gray-800 rounded-lg px-2">
                                <Search size={14} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="스킬 검색..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full bg-transparent border-none text-sm text-white px-2 py-1.5 focus:outline-none placeholder:text-gray-600"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="max-h-80 overflow-y-auto p-1 custom-scrollbar">
                            <button
                                onClick={() => { onSelectSkill(''); setIsOpen(false); }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 mb-1
                    ${!activeSkillId ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center">
                                    <Cpu size={14} />
                                </div>
                                <div>
                                    <div className="font-medium">일반 대화 (General Chat)</div>
                                    <div className="text-xs opacity-70">특정 스킬 없이 대화</div>
                                </div>
                            </button>

                            {filteredSkills.map(skill => (
                                <button
                                    key={skill.id}
                                    onClick={() => { onSelectSkill(skill.id); setIsOpen(false); }}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 mb-1
                      ${activeSkillId === skill.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <div className="w-6 h-6 rounded bg-gray-800 flex items-center justify-center text-xs font-bold uppercase shrink-0 border border-white/10">
                                        {skill.name.substring(0, 2)}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-medium truncate">{skill.name}</div>
                                        <div className="text-xs opacity-70 truncate">{skill.category}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
