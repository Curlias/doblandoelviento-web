#!/bin/bash
set -e

echo "Building ILAIA..."
npm install
npx turbo run build --filter=web-ilaia...

# Copy build output to root for Vercel
cp -r apps/web-ilaia/.next .next
cp -r apps/web-ilaia/public public || true
