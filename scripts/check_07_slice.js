const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
const content = fs.readFileSync(catalogPath, 'utf8');

const idx7 = content.indexOf('"id": "bai-07"');
const idx81 = content.indexOf('"id": "bai-08-1"');
const bai07Slice = content.slice(idx7, idx81);

console.log('bai-07 slice length:', bai07Slice.length);
console.log('bai-07 has motions:', bai07Slice.includes('"motions":'));
const motionsMatch = bai07Slice.match(/"motions":\s*\[([\s\S]*?)\]/);
if (motionsMatch) {
  const count = (motionsMatch[1].match(/"id":/g) || []).length;
  console.log('bai-07 motions count:', count);
} else {
  console.log('bai-07 has NO motions array match!');
}
