import React, { useState, useMemo } from 'react';
import { Skill } from '@/domain/entities/Skill';
import { ChevronDown, ChevronRight, Search, Cpu, Folder } from 'lucide-react';

interface SkillSelectorProps {
    skills: Skill[];
    activeSkillId: string | null;
    onSelectSkill: (skillId: string) => void;
}

export const SkillSelector: React.FC<SkillSelectorProps> = ({ skills, activeSkillId, onSelectSkill }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

    const activeSkill = skills.find(s => s.id === activeSkillId);

    // Filter skills by name, category, or triggers
    const filteredSkills = useMemo(() => {
        if (!search) return skills;
        const searchLower = search.toLowerCase();
        return skills.filter(s =>
            s.name.toLowerCase().includes(searchLower) ||
            s.category.toLowerCase().includes(searchLower) ||
            s.triggers.some(t => t.toLowerCase().includes(searchLower))
        );
    }, [skills, search]);

    // Group skills by category
    const groupedSkills = useMemo(() => {
        const groups: Record<string, Skill[]> = {};
        filteredSkills.forEach(skill => {
            if (!groups[skill.category]) groups[skill.category] = [];
            groups[skill.category].push(skill);
        });
        return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
    }, [filteredSkills]);

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => {
            const next = new Set(prev);
            if (next.has(category)) {
                next.delete(category);
            } else {
                next.add(category);
            }
            return next;
        });
    };

    // Expand all categories when searching
    const effectiveExpanded = search ? new Set(groupedSkills.map(([cat]) => cat)) : expandedCategories;

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
                    <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
                        <div className="p-2 border-b border-white/5">
                            <div className="flex items-center bg-gray-800 rounded-lg px-2">
                                <Search size={14} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="스킬 검색 (이름, 카테고리, 트리거)..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full bg-transparent border-none text-sm text-white px-2 py-1.5 focus:outline-none placeholder:text-gray-600"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="max-h-96 overflow-y-auto p-1 custom-scrollbar">
                            {/* General Chat Option */}
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

                            {/* Category Groups */}
                            {groupedSkills.map(([category, categorySkills]) => (
                                <div key={category} className="mt-1">
                                    {/* Category Header */}
                                    <button
                                        onClick={() => toggleCategory(category)}
                                        className="w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center gap-1.5 text-gray-500 hover:text-gray-300 hover:bg-white/5"
                                    >
                                        {effectiveExpanded.has(category) ? (
                                            <ChevronDown size={12} />
                                        ) : (
                                            <ChevronRight size={12} />
                                        )}
                                        <Folder size={12} />
                                        <span className="font-medium uppercase tracking-wide">{category}</span>
                                        <span className="ml-auto text-gray-600">({categorySkills.length})</span>
                                    </button>

                                    {/* Skills in Category */}
                                    {effectiveExpanded.has(category) && (
                                        <div className="ml-3 border-l border-white/5 pl-1">
                                            {categorySkills.map(skill => (
                                                <button
                                                    key={skill.id}
                                                    onClick={() => { onSelectSkill(skill.id); setIsOpen(false); }}
                                                    className={`w-full text-left px-2 py-1.5 rounded-lg text-sm flex items-center gap-2 mb-0.5
                                                        ${activeSkillId === skill.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                                >
                                                    <div className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center text-[10px] font-bold uppercase shrink-0 border border-white/10">
                                                        {skill.name.substring(0, 2)}
                                                    </div>
                                                    <div className="min-w-0 flex-1">
                                                        <div className="font-medium truncate text-xs">{skill.name}</div>
                                                        {skill.triggers.length > 0 && (
                                                            <div className="text-[10px] opacity-50 truncate">
                                                                {skill.triggers.slice(0, 2).join(', ')}
                                                            </div>
                                                        )}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {groupedSkills.length === 0 && search && (
                                <div className="text-center text-gray-500 text-sm py-4">
                                    검색 결과가 없습니다
                                </div>
                            )}
                        </div>

                        {/* Footer with skill count */}
                        <div className="px-3 py-2 border-t border-white/5 text-xs text-gray-500">
                            총 {skills.length}개 스킬 · {groupedSkills.length}개 카테고리
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
