#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build > /tmp/b.log 2>&1
echo "BUILD_EXIT=$?"
grep -E "transformed|built in|error" /tmp/b.log
git add -A
git commit -q -m "Portfolio: add AI Interview (Beaverhand) project + matching cover + Visit-site CTA"
git push origin main
echo "PUSHED"
JS=$(ls dist/assets/index-*.js)
echo "bundle: $JS"
python -c "import glob; d=open(glob.glob('dist/assets/index-*.js')[0],encoding='utf-8',errors='ignore').read(); print('beaverhand card:', 'AI Interview — Beaverhand' in d); print('visit site CTA:', 'Visit site' in d); print('img exists    :', __import__('os').path.exists('public/img/projects/beaverhand.svg'))"