const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');
const match = content.match(/"id": "bai-08"[\s\S]*?"id": "bai-11"/);
if(match) console.log(match[0]);
