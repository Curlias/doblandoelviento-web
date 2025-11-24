#!/bin/bash
set -e

# Determine which app to build based on environment variable
APP_NAME=${VERCEL_APP_NAME:-"web-doblado"}

echo "Building app: $APP_NAME"
npm install
npx turbo run build --filter=$APP_NAME...

# Copy the built app to root .next directory
echo "Copying build output from apps/$APP_NAME/.next to .next"
rm -rf .next
cp -r apps/$APP_NAME/.next .next

# Copy public folder if exists
if [ -d "apps/$APP_NAME/public" ]; then
  echo "Copying public folder"
  rm -rf public
  cp -r apps/$APP_NAME/public public
fi

# Copy next.config.js and package.json for Vercel runtime
cp apps/$APP_NAME/next.config.js next.config.js || echo "No next.config.js found"
cp apps/$APP_NAME/package.json package.json.app

echo "Build complete for $APP_NAME"
