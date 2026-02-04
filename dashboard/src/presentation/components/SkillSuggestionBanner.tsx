import React from 'react';
import { Skill } from '@/domain/entities/Skill';
import { Sparkles, X } from 'lucide-react';

interface SkillSuggestionBannerProps {
    suggestions: Skill[];
    onSelectSkill: (skillId: string) => void;
    onDismiss: () => void;
}

export const SkillSuggestionBanner: React.FC<SkillSuggestionBannerProps> = ({
    suggestions,
    onSelectSkill,
    onDismiss
}) => {
    if (suggestions.length === 0) return null;

    return (
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-3 mb-4 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-2">
                    <Sparkles size={14} />
                    <span>추천 스킬</span>
                </div>
                <button
                    onClick={onDismiss}
                    className="text-gray-500 hover:text-gray-300 p-1 -mt-1 -mr-1"
                >
                    <X size={14} />
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {suggestions.map(skill => (
                    <button
                        key={skill.id}
                        onClick={() => onSelectSkill(skill.id)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all"
                    >
                        <div className="w-4 h-4 rounded bg-gray-800 flex items-center justify-center text-[8px] font-bold uppercase border border-white/10">
                            {skill.name.substring(0, 2)}
                        </div>
                        <span>{skill.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};
