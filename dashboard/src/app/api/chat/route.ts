import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { prompt, skillId } = body;

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const response = await container.executeSkill.execute(skillId, prompt);
        return NextResponse.json({ message: response });
    } catch (error: any) {
        console.error('Chat execution failed:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
