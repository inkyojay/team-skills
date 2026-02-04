import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const MAX_FILES = 100; // Limit to prevent scanning 90k+ files
const MAX_DEPTH = 3;   // Limit directory depth

export async function GET(request: NextRequest) {
    try {
        const outputDir = path.resolve(process.cwd(), '../output');

        if (!fs.existsSync(outputDir)) {
            return NextResponse.json([]);
        }

        const limit = Math.min(
            parseInt(request.nextUrl.searchParams.get('limit') || String(MAX_FILES)),
            MAX_FILES
        );

        // Recursive function to get files with depth limit
        const getFiles = async (dir: string, baseDir: string, depth: number = 0): Promise<any[]> => {
            if (depth > MAX_DEPTH) return [];

            const entries = await fs.promises.readdir(dir, { withFileTypes: true });
            const files: any[] = [];

            // Process entries in parallel for better performance
            const promises = entries.map(async (entry) => {
                const fullPath = path.join(dir, entry.name);
                const relativePath = path.relative(baseDir, fullPath);

                if (entry.isDirectory()) {
                    return getFiles(fullPath, baseDir, depth + 1);
                } else {
                    // Single stat call instead of two
                    const stat = await fs.promises.stat(fullPath);
                    return [{
                        name: entry.name,
                        path: relativePath,
                        size: stat.size,
                        mtime: stat.mtime
                    }];
                }
            });

            const results = await Promise.all(promises);
            for (const result of results) {
                files.push(...result);
            }
            return files;
        };

        const files = await getFiles(outputDir, outputDir);
        // Sort by newest first and limit
        files.sort((a, b) => new Date(b.mtime).getTime() - new Date(a.mtime).getTime());

        return NextResponse.json(files.slice(0, limit));
    } catch (error) {
        console.error('Failed to fetch outputs:', error);
        return NextResponse.json({ error: 'Failed to fetch outputs' }, { status: 500 });
    }
}
