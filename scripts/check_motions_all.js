const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');

const regex = /\{\s*"id":\s*"([^"]+)",[\s\S]*?"contentType":\s*"([^"]+)",[\s\S]*?"motions":\s*\[([\s\S]*?)\]/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const type = match[2];
    const motions = match[3];
    if (motions.trim().length > 0) {
        console.log(`${id} (${type}) HAS motions`);
    } else {
        console.log(`${id} (${type}) empty`);
    }
}
