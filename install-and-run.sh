#!/bin/bash
echo "🚀 Installing TutorCoach..."
npm install
echo "✅ Installation complete!"
echo ""
echo "🔧 Running linter..."
npm run lint --fix
echo ""
echo "🏗️ Building project..."
npm run build
echo ""
echo "✅ Build successful! Starting development server..."
npm run dev
