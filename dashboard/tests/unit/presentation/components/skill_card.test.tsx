import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SkillCard } from '@/presentation/components/SkillCard';
import { Skill } from '@/domain/entities/Skill';

describe('SkillCard', () => {
    const mockSkill = new Skill(
        'test-id',
        'Test Skill',
        'Test Description',
        'Category',
        ['tag1']
    );

    it('renders skill information correctly', () => {
        render(<SkillCard skill={ mockSkill } onSelect = {() => {}} />);

    expect(screen.getByText('Test Skill')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
});

it('calls onSelect when clicked', () => {
    const handleSelect = jest.fn();
    render(<SkillCard skill={ mockSkill } onSelect = { handleSelect } />);

    fireEvent.click(screen.getByText('Test Skill'));
    expect(handleSelect).toHaveBeenCalledWith(mockSkill);
});
});
