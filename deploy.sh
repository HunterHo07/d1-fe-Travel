#!/bin/bash

# Clean up previous build
rm -rf out

# Build the project with production environment
NODE_ENV=production bun run export

# Create necessary files for GitHub Pages
touch out/.nojekyll
echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/d1-fe-Travel/"></head></html>' > out/index.html

# Deploy to GitHub Pages
bunx gh-pages -d out
