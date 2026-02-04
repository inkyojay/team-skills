import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    sidebar?: React.ReactNode;
    rightPanel?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, sidebar, rightPanel }) => {
    return (
        <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden font-sans selection:bg-blue-500/30">
            {/* Left Sidebar */}
            <aside className="w-80 border-r border-white/5 bg-gray-900/50 backdrop-blur-xl flex flex-col shrink-0">
                {sidebar}
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-gradient-to-br from-gray-950 to-gray-900 relative">
                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                {children}
            </main>

            {/* Right Panel */}
            {rightPanel && (
                <aside className="w-72 border-l border-white/5 bg-gray-900/50 backdrop-blur-xl flex flex-col shrink-0">
                    {rightPanel}
                </aside>
            )}
        </div>
    );
};
