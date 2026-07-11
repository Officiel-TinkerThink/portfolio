#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build
echo "EXIT=$?"
git add -A
git commit -q -m "Contact: make email & WhatsApp cards clickable (whole card)"
git push origin main
echo "PUSHED"