#!/bin/bash

# Build the project
npm run build

# Move to the build output directory
cd dist

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# Create a copy of index.html as 404.html
cp index.html 404.html

# Add all files to git
git init
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f https://github.com/Tunje/AimRV.git master:gh-pages

# Go back to the project root
cd ..

echo "Deployed to GitHub Pages"
