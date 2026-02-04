import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const body = await request.json();
    const { content, skillId } = body;

    try {
        const assistantMessage = await container.chatService.sendMessage(resolvedParams.id, content, skillId);
        return NextResponse.json(assistantMessage);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
