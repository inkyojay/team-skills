import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function GET() {
    const sessions = await container.chatService.getAllSessions();
    return NextResponse.json(sessions);
}

export async function POST() {
    const sessionId = await container.chatService.createNewSession();
    return NextResponse.json({ id: sessionId });
}
