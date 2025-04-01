#!/bin/bash

# Simple script to deploy to GitHub Pages

echo "Setting up GitHub repository..."

# Initialize Git repository if not already initialized
if [ ! -d ".git" ]; then
  git init
  echo "Git repository initialized."
else
  echo "Git repository already exists."
fi

# Add all files
git add .

# Commit changes
git commit -m "Update portfolio website"

# Check if gh-pages branch exists
if git show-ref --quiet refs/heads/gh-pages; then
  echo "gh-pages branch already exists."
else
  # Create gh-pages branch
  git checkout -b gh-pages
  echo "Created gh-pages branch."
fi

echo "To complete deployment, push to GitHub with:"
echo "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo "git push -u origin gh-pages"
echo ""
echo "Then your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO"
echo ""
echo "Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repository name."