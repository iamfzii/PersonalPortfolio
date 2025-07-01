#!/bin/bash

echo "Building static version for Vercel deployment..."

# Set execute permissions for node binaries
find node_modules/.bin -type f -exec chmod +x {} \; 2>/dev/null || true

# Build the frontend with Vite
echo "Building frontend with Vite..."
npx vite build

# Copy redirects file if it exists
if [ -f "_redirects" ]; then
    cp _redirects dist/public/_redirects
    echo "Copied _redirects file"
else
    echo "No _redirects file found, skipping..."
fi

echo "Static build completed successfully!"
echo "Output directory: dist/public"