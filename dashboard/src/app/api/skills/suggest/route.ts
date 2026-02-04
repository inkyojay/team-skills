import { NextRequest, NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function POST(request: NextRequest) {
    try {
        const { input } = await request.json();

        if (!input || typeof input !== 'string') {
            return NextResponse.json({ error: 'Input is required' }, { status: 400 });
        }

        const suggestions = await container.suggestSkills.execute(input);
        return NextResponse.json(suggestions);
    } catch (error) {
        console.error('Failed to suggest skills:', error);
        return NextResponse.json({ error: 'Failed to suggest skills' }, { status: 500 });
    }
}
