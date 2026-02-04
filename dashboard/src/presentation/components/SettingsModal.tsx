import React, { useState, useEffect } from 'react';
import { X, Save, Key, Cpu, Shield } from 'lucide-react';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AVAILABLE_MODELS = [
    // Claude 4.5 Series (Latest)
    { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5 (추천)', description: '균형 잡힌 성능' },
    { id: 'claude-haiku-4-5', name: 'Claude Haiku 4.5 (Fast)', description: '가장 빠름' },
    { id: 'claude-opus-4-5', name: 'Claude Opus 4.5 (Powerful)', description: '가장 강력' },
    // Legacy Models
    { id: 'claude-sonnet-4-0', name: 'Claude Sonnet 4', description: '이전 버전' },
    { id: 'claude-3-7-sonnet-latest', name: 'Claude 3.7 Sonnet', description: '레거시' },
];

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const [apiKey, setApiKey] = useState('');
    const [model, setModel] = useState('claude-3-5-sonnet-latest');
    const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const [isServerManaged, setIsServerManaged] = useState(false);
    const [hasKey, setHasKey] = useState(false);

    useEffect(() => {
        if (isOpen) {
            fetch('/api/settings').then(res => res.json()).then(data => {
                setIsServerManaged(data.isServerManaged || false);
                setHasKey(data.hasKey || false);
                if (data.model) {
                    setModel(data.model);
                }
            });
        }
    }, [isOpen]);

    const handleSave = async () => {
        setStatus('saving');
        try {
            const payload: any = {};
            // Only include apiKey if not server-managed and user entered one
            if (!isServerManaged && apiKey) {
                payload.apiKey = apiKey;
            }
            // Always allow model selection (even for server-managed, just save locally)
            payload.model = model;

            const res = await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setStatus('saved');
                setTimeout(() => {
                    setStatus('idle');
                    onClose();
                }, 1000);
            } else {
                setStatus('error');
            }
        } catch (e) {
            setStatus('error');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                        <Key size={20} />
                        API Settings
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4 mb-6">
                    {/* API Key Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Anthropic API Key
                        </label>
                        {isServerManaged ? (
                            <div className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                                <Shield size={16} className="text-green-600 dark:text-green-400" />
                                <span className="text-sm text-green-700 dark:text-green-300">
                                    서버에서 API 키 관리 중 (설정 불필요)
                                </span>
                            </div>
                        ) : (
                            <>
                                <input
                                    type="password"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder={hasKey ? '••••••••' : 'sk-ant-...'}
                                    className="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    {hasKey ? '새 키를 입력하면 기존 키가 교체됩니다.' : '.env.local에 저장됩니다.'}
                                </p>
                            </>
                        )}
                    </div>

                    {/* Model Selection Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                            <Cpu size={16} />
                            AI Model
                        </label>
                        <select
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-900 dark:border-gray-600 dark:text-white"
                        >
                            {AVAILABLE_MODELS.map(m => (
                                <option key={m.id} value={m.id}>{m.name}</option>
                            ))}
                            {/* Fallback for custom or future models if persisted value isn't in list */}
                            {!AVAILABLE_MODELS.find(m => m.id === model) && (
                                <option value={model}>{model} (Custom)</option>
                            )}
                        </select>
                        <p className="text-xs text-gray-500 mt-1">
                            Choose between speed (Haiku) and intelligence (Opus/Sonnet).
                        </p>
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md">
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={status === 'saving'}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2 disabled:opacity-50"
                    >
                        {status === 'saving' ? 'Saving...' : 'Save'}
                        {status === 'saved' && <span className="text-green-200">✓</span>}
                    </button>
                </div>
            </div>
        </div>
    );
};
