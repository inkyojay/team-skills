import { NextResponse } from 'next/server';
import { EnvConfigRepository } from '@/data/repositories/EnvConfigRepository';
import path from 'path';

export async function POST(request: Request) {
    try {
        const rootDir = path.resolve(process.cwd(), '..');
        const repo = new EnvConfigRepository(rootDir);
        const body = await request.json();
        const { apiKey, model } = body;

        // API key can only be saved if not server-managed
        if (apiKey !== undefined) {
            if (repo.isServerManaged()) {
                return NextResponse.json({ error: 'API key is server-managed' }, { status: 403 });
            }
            await repo.saveApiKey(apiKey);
        }

        // Model can always be saved locally
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
        const isServerManaged = repo.isServerManaged();

        return NextResponse.json({
            hasKey: !!key,
            maskedKey: key ? `${key.substring(0, 3)}...${key.substring(key.length - 4)}` : null,
            model,
            isServerManaged // true = 서버에서 관리, 사용자 입력 불필요
        });
    } catch (error) {
        return NextResponse.json({ hasKey: false, model: null, isServerManaged: false });
    }
}
