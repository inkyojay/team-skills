import { NextResponse } from 'next/server';
import { EnvConfigRepository } from '@/data/repositories/EnvConfigRepository';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { apiKey, model } = body;

        const rootDir = path.resolve(process.cwd(), '..');
        const repo = new EnvConfigRepository(rootDir);

        if (apiKey !== undefined) {
            await repo.saveApiKey(apiKey);
        }

        if (model !== undefined) {
            await repo.saveModel(model);
        }

        return NextResponse.json({ message: 'Settings saved' });
    } catch (error: any) {
        console.error('Failed to save settings:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        const rootDir = path.resolve(process.cwd(), '..');
        const repo = new EnvConfigRepository(rootDir);
        const key = await repo.getApiKey();
        const model = await repo.getModel();

        return NextResponse.json({
            hasKey: !!key,
            maskedKey: key ? `${key.substring(0, 3)}...${key.substring(key.length - 4)}` : null,
            model
        });
    } catch (error) {
        return NextResponse.json({ hasKey: false, model: null });
    }
}
