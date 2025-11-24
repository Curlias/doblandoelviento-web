#!/bin/bash
set -e
npm install
npx turbo run build --filter=web-doblado...
cp -r apps/web-doblado/.next .next
