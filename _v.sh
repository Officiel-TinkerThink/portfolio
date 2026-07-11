#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build > /tmp/b.log 2>&1
echo "BUILD_EXIT=$?"
grep -E "transformed|built in|error" /tmp/b.log
git add -A
git commit -q -m "Portfolio: add 'Most hot' tab (Beaverhand, AKIRA, Data Analyst Agent); reword DA desc"
git push origin main
echo "PUSHED"
JS=$(ls dist/assets/index-*.js)
echo "bundle: $JS"
python -c "import glob; d=open(glob.glob('dist/assets/index-*.js')[0],encoding='utf-8',errors='ignore').read(); print('Most hot tab :', 'Most hot' in d); print('DA new desc  :', 'business leaders get data insights' in d); print('translate tag:', 'translates it into database' in d)"