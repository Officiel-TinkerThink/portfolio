#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build > /tmp/b.log 2>&1
echo "BUILD_EXIT=$?"
grep -E "transformed|built in" /tmp/b.log
git add -A
git commit -q -m "Portfolio: fix project image assignment (repoint 9 to correct covers)"
git push origin main
echo "PUSHED"
JS=$(ls dist/assets/index-*.js)
echo "bundle: $JS"