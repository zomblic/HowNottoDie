#!/bin/bash

# Abort if any command fails
set -e

echo "🔧 Installing Git LFS (if available)..."
if command -v git-lfs >/dev/null 2>&1; then
  git lfs pull
else
  echo "⚠️  Git LFS is not installed — skipping LFS pull"
fi

echo "📦 Installing server dependencies..."
npm --prefix server install

echo "📦 Installing client dependencies..."
npm --prefix client install

echo "🛠 Building client..."
npm --prefix client run build

echo "✅ Build complete."


# Install Git LFS
apt-get update
apt-get install -y git-lfs
git lfs install
git lfs pull

# Now your normal build steps
npm install
npm run render-build
