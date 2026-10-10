const fs = require('fs');
const file = 'src/data/canonicalCatalog.ts';
let content = fs.readFileSync(file, 'utf8');

// Fix duplicate contentType
content = content.replace(/"contentType": "practice",\s*"pdfPages"/g, '"pdfPages"');

fs.writeFileSync(file, content);
console.log("Fixed duplicate contentType");
