#!/bin/bash

# Navigate to script directory
cd "$(dirname "$0")"

# Ensure dashboard directory exists
if [ ! -d "dashboard" ]; then
    echo "❌ Error: 'dashboard' directory not found."
    exit 1
fi

cd dashboard

echo "🚀 Starting Team Skills Dashboard..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build project if needed (optional for dev mode, but good for prod like run)
# For now, just run dev for hot reload experience which is better for team adding skills
echo "✨ Launching Development Server..."
npm run dev

# Or for production:
# npm run build && npm start
