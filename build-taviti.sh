#!/bin/bash
set -e

echo "Building TAVITI..."
npm install
npx turbo run build --filter=web-taviti...

# Copy build output to root for Vercel
cp -r apps/web-taviti/.next .next
cp -r apps/web-taviti/public public || true
