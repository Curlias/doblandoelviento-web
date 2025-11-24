#!/bin/bash
set -e
npm install
npx turbo run build --filter=web-ilaia...
cp -r apps/web-ilaia/.next .next
