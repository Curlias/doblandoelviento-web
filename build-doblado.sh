#!/bin/bash
set -e

echo "Building Doblando el Viento..."
npm install
npx turbo run build --filter=web-doblado...

# Copy build output to root for Vercel
cp -r apps/web-doblado/.next .next
cp -r apps/web-doblado/public public || true
