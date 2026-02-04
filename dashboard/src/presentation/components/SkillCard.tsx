import React from 'react';
import { Skill } from '@/domain/entities/Skill';

interface SkillCardProps {
    skill: Skill;
    onSelect: (skill: Skill) => void;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(skill)}
            className="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
        >
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{skill.name}</h3>
                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    {skill.category}
                </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {skill.description}
            </p>
            <div className="flex flex-wrap gap-1">
                {skill.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};
