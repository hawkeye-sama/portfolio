#!/bin/bash

# Get the current version number
VERSION=$(node -pe "require('./package.json').version")

# Increment the version number
NEW_VERSION=$(npm version patch --no-git-tag-version)

# Build the React app
npm run build

# Deploy the app to GitHub pages
npm run deploy

# Commit and push the changes
git add .
git commit -m "Deploy version $NEW_VERSION"
git push