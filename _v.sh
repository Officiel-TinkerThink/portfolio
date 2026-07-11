#!/bin/bash
set -e
cd "/d/WORK/Side Project/portfolio"
rm -rf dist node_modules/.vite
npm run build > /tmp/b.log 2>&1
echo "BUILD_EXIT=$?"
grep -E "transformed|built in|error" /tmp/b.log
git add -A
git commit -q -m "Contact: message placeholder + '[personal-website reach out]' subject tag"
git push origin main
echo "PUSHED"
JS=$(ls dist/assets/index-*.js)
echo "bundle: $JS"
python -c "import glob; d=open(glob.glob('dist/assets/index-*.js')[0],encoding='utf-8',errors='ignore').read(); print('subject tag:', 'personal-website reach out' in d); print('placeholder  :', 'Write your message here' in d)"