import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    const session = await container.chatService.getSessionHistory(resolvedParams.id);
    if (!session) {
        return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }
    return NextResponse.json(session);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const resolvedParams = await params;
    await container.chatService.deleteSession(resolvedParams.id);
    return NextResponse.json({ success: true });
}
