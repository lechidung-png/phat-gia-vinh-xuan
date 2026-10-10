const fs = require('fs');

const path = 'src/data/canonicalCatalog.ts';
let content = fs.readFileSync(path, 'utf8');

let matchCount = 0;

// Find all reading lessons and empty their motions array
content = content.replace(/(\{\s*"id":\s*"[^"]+",\s*"title":[^}]*"contentType":\s*"reading"[\s\S]*?"motions":\s*\[)([\s\S]*?)(\],\s*"recommendedPrerequisites":)/g, (match, p1, p2, p3) => {
    if (p2.trim().length > 0) {
        console.log('Clearing motions for reading lesson...');
        matchCount++;
        return p1 + '\n    ' + p3;
    }
    return match;
});

if (matchCount > 0) {
    fs.writeFileSync(path, content);
    console.log(`Fixed ${matchCount} lessons.`);
} else {
    console.log('No reading lessons with populated motions found.');
}
