import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function GET() {
    try {
        const skills = await container.getAllSkills.execute();
        // Exclude body and filePath from list response for performance
        // body is ~10KB per skill × 143 skills = 1.4MB unnecessary data
        const lightSkills = skills.map(s => ({
            id: s.id,
            name: s.name,
            description: s.description,
            category: s.category,
            tags: s.tags,
            triggers: s.triggers
        }));
        return NextResponse.json(lightSkills);
    } catch (error) {
        console.error('Failed to fetch skills:', error);
        return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
    }
}
