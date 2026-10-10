const fs = require('fs');
const lines = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8').split('\n');
for (let i=0; i<lines.length; i++) {
    if (lines[i].includes('Ngũ Hình')) {
        console.log(`Line ${i}: ${lines[i]}`);
    }
}
