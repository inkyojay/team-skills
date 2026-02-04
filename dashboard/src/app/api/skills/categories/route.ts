import { NextResponse } from 'next/server';
import { container } from '@/main/di';

export async function GET() {
    try {
        const categories = await container.getCategories.execute();
        return NextResponse.json(categories);
    } catch (error) {
        console.error('Failed to fetch categories:', error);
        return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
    }
}
