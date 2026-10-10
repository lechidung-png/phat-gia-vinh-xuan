const { execSync } = require('child_process');
const fs = require('fs');

const out = execSync('git show 87abb69:src/data/canonicalCatalog.ts', { maxBuffer: 20 * 1024 * 1024 }).toString();
const idx7 = out.indexOf('"id": "bai-07"');
const idx8 = out.indexOf('"id": "bai-08"');

console.log('In commit 87abb69:');
const slice = out.slice(idx7, idx8);
const motionsMatch = slice.match(/"motions":\s*\[([\s\S]*?)\]/);
if (motionsMatch) {
  const count = (motionsMatch[1].match(/"id":/g) || []).length;
  console.log('bai-07 motions count:', count);
} else {
  console.log('No motions in 87abb69');
}

// Check 524430d
const outPrev = execSync('git show 524430d:src/data/canonicalCatalog.ts', { maxBuffer: 20 * 1024 * 1024 }).toString();
const idx7Prev = outPrev.indexOf('"id": "bai-07"');
const idx8Prev = outPrev.indexOf('"id": "bai-08"');
const slicePrev = outPrev.slice(idx7Prev, idx8Prev);
const motionsMatchPrev = slicePrev.match(/"motions":\s*\[([\s\S]*?)\]/);
if (motionsMatchPrev) {
  const count = (motionsMatchPrev[1].match(/"id":/g) || []).length;
  console.log('bai-07 motions count in 524430d:', count);
}
