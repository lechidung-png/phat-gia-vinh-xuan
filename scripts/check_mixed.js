const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');

const regex = /\{\s*"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",[\s\S]*?"contentType":\s*"([^"]+)",[\s\S]*?"motions":\s*\[([\s\S]*?)\]/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const id = match[1];
    const title = match[2];
    const type = match[3];
    const motions = match[4];
    if (motions.trim().length > 0 && type !== 'practice' && type !== 'weapon_form' && type !== 'dummy') {
        console.log(`${id} | ${title} | ${type} | HAS motions`);
    }
}
