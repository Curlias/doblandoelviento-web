#!/bin/bash
set -e

# Determine which app to build based on environment variable
APP_NAME=${VERCEL_APP_NAME:-"web-doblado"}

echo "========================================="
echo "Building app: $APP_NAME"
echo "========================================="

# Install all dependencies from root (required for monorepo)
echo "Installing dependencies..."
npm install

# Build the specific app using Turborepo
echo "Building $APP_NAME with Turborepo..."
npx turbo run build --filter=$APP_NAME...

# Verify build succeeded
if [ ! -d "apps/$APP_NAME/.next" ]; then
  echo "ERROR: Build failed - .next directory not found"
  exit 1
fi

# Copy the built app to root .next directory for Vercel
echo "Copying build output from apps/$APP_NAME/.next to .next"
rm -rf .next
cp -r apps/$APP_NAME/.next .next

# Copy public folder if exists
if [ -d "apps/$APP_NAME/public" ]; then
  echo "Copying public folder"
  rm -rf public
  cp -r apps/$APP_NAME/public public
fi

# Copy configuration files for Vercel runtime
echo "Copying configuration files..."
cp apps/$APP_NAME/next.config.js next.config.js
cp apps/$APP_NAME/package.json package.json

echo "========================================="
echo "Build complete for $APP_NAME"
echo "========================================="
