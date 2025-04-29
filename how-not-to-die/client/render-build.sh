#!/usr/bin/env bash
set -o errexit

# Install Git LFS
apt-get update
apt-get install -y git-lfs
git lfs install
git lfs pull

# Now your normal build steps
npm install
npm run render-build
