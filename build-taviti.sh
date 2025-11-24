#!/bin/bash
set -e
npm install
npx turbo run build --filter=web-taviti...
cp -r apps/web-taviti/.next .next
