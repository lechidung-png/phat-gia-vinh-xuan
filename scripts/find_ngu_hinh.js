const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');

const regex = /\{\s*"id":\s*"(bai-[^"]+)",[\s\S]*?"title":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    if (match[2].toLowerCase().includes('ngũ hình')) {
        console.log(`${match[1]} - ${match[2]}`);
    }
}
