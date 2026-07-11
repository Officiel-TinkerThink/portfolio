#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build > /tmp/b.log 2>&1
echo "BUILD_EXIT=$?"
grep -E "transformed|built in|error" /tmp/b.log
git add -A
git commit -q -m "Resume: add 5 certifications as clickable certificate links"
git push origin main
echo "PUSHED"
JS=$(ls dist/assets/index-*.js)
echo "bundle: $JS"
python -c "import glob; d=open(glob.glob('dist/assets/index-*.js')[0],encoding='utf-8',errors='ignore').read(); print('cert count in bundle:', d.count('certificates.cs50.io')+d.count('courses.edx.org')); print('Fundamentals of Statistics:', 'Fundamentals of Statistics' in d); print('Probability cert:', 'MITx — Probability' in d)"