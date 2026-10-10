const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');
const match = content.match(/"id":\s*"bai-08"[\s\S]*?"contentType":\s*"reading"[\s\S]*?"assets":\s*\[([\s\S]*?)\]/);
if(match) console.log(match[0]);
