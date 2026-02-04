import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function GET() {
    try {
        const skills = await container.getAllSkills.execute();
        return NextResponse.json(skills);
    } catch (error) {
        console.error('Failed to fetch skills:', error);
        return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
    }
}
