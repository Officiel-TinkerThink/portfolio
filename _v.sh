#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build > /tmp/b.log 2>&1
echo "BUILD_EXIT=$?"
grep -E "transformed|built in|error" /tmp/b.log
git add -A
git commit -q -m "Portfolio: add confidential 'Data Analyst Agent' (in progress, NDA) project card"
git push origin main
echo "PUSHED"
JS=$(ls dist/assets/index-*.js)
echo "bundle: $JS"
python -c "import glob,os; d=open(glob.glob('dist/assets/index-*.js')[0],encoding='utf-8',errors='ignore').read(); print('DA card    :', 'Data Analyst Agent' in d); print('Confidential:', 'Confidential' in d); print('NDA        :', 'under NDA' in d); print('img exists :', os.path.exists('public/img/projects/data-analyst.svg'))"