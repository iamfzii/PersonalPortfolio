#!/bin/bash

echo "Starting Vercel deployment build process..."

# Fix permissions for all node_modules binaries
echo "Setting executable permissions for node_modules/.bin/*"
find node_modules/.bin -type f -exec chmod +x {} \; 2>/dev/null || true

# Ensure vite has execute permissions specifically
if [ -f "node_modules/.bin/vite" ]; then
    chmod +x node_modules/.bin/vite
    echo "Set executable permission for vite"
fi

# Ensure esbuild has execute permissions specifically
if [ -f "node_modules/.bin/esbuild" ]; then
    chmod +x node_modules/.bin/esbuild
    echo "Set executable permission for esbuild"
fi

echo "Running build process..."
# Run the build process
npm run build

echo "Build completed successfully!"