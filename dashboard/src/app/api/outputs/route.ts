import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const outputDir = path.resolve(process.cwd(), '../output');

        // Recursive function to get files
        const getFiles = async (dir: string, baseDir: string) => {
            const entries = await fs.promises.readdir(dir, { withFileTypes: true });
            const files: any[] = [];

            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                const relativePath = path.relative(baseDir, fullPath);

                if (entry.isDirectory()) {
                    files.push(...await getFiles(fullPath, baseDir));
                } else {
                    files.push({
                        name: entry.name,
                        path: relativePath,
                        size: (await fs.promises.stat(fullPath)).size,
                        mtime: (await fs.promises.stat(fullPath)).mtime
                    });
                }
            }
            return files;
        };

        if (!fs.existsSync(outputDir)) {
            return NextResponse.json([]);
        }

        const files = await getFiles(outputDir, outputDir);
        // Sort by newest first
        files.sort((a, b) => new Date(b.mtime).getTime() - new Date(a.mtime).getTime());

        return NextResponse.json(files);
    } catch (error) {
        console.error('Failed to fetch outputs:', error);
        return NextResponse.json({ error: 'Failed to fetch outputs' }, { status: 500 });
    }
}
