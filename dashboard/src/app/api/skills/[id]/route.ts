import { NextRequest, NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const skill = await container.getSkillDetail.execute(id);

        if (!skill) {
            return NextResponse.json({ error: 'Skill not found' }, { status: 404 });
        }

        return NextResponse.json(skill);
    } catch (error) {
        console.error('Failed to fetch skill:', error);
        return NextResponse.json({ error: 'Failed to fetch skill' }, { status: 500 });
    }
}
