const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');
const match = content.match(/"id": "bai-01"[\s\S]*?"contentType": "reading"/);
if(match) console.log(match[0]);
