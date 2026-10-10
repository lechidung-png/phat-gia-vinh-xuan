const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../src/data/canonicalCatalog.ts');
let content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('"id": "bai-luyen-tong-hop"');
if (startIdx === -1) {
  console.log("Could not find bai-luyen-tong-hop");
  process.exit(1);
}

const motionsMatch = content.match(/"id": "bai-luyen-tong-hop"[\s\S]*?"motions":\s*\[([\s\S]*?)\]\s*,/);
if (motionsMatch) {
  const fullMatch = motionsMatch[0];
  const emptyMotions = fullMatch.replace(/"motions":\s*\[[\s\S]*?\]\s*,/, '"motions": [],\n    "contentType": "reading",');
  content = content.replace(fullMatch, emptyMotions);
  fs.writeFileSync(file, content);
  console.log("Successfully cleared motions for bai-luyen-tong-hop!");
} else {
  console.log("Regex failed to match motions array");
}
