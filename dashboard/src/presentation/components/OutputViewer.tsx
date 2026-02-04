import React, { useEffect, useState } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

interface OutputFile {
    name: string;
    path: string;
    size: number;
    mtime: string; // ISO date string
}

export const OutputViewer: React.FC = () => {
    const [files, setFiles] = useState<OutputFile[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/outputs')
            .then(res => res.json())
            .then(data => {
                setFiles(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-4 text-center">Loading outputs...</div>;
    if (files.length === 0) return <div className="p-4 text-center text-gray-500">No outputs generated yet.</div>;

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 font-semibold text-sm">
                Generated Outputs
            </div>
            <div className="max-h-60 overflow-y-auto">
                {files.map((file, i) => (
                    <div key={i} className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <div className="flex items-center gap-3 overflow-hidden">
                            <FileText size={16} className="text-blue-500 shrink-0" />
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                                <p className="text-xs text-gray-500 truncate">{file.path}</p>
                            </div>
                        </div>
                        {/* Adding actions would require valid hrefs or APIs to download */}
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                            {new Date(file.mtime).toLocaleDateString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
