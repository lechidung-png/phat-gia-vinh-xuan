const fs = require('fs');

const path = 'src/data/canonicalCatalog.ts';
let content = fs.readFileSync(path, 'utf8');

// Find all reading lessons and empty their motions array
// We'll parse the file using a regex to find blocks, or better yet, just do it safely.
// Since the file is well formatted, let's use a simpler approach:
let matchCount = 0;

content = content.replace(/(\{\s*"id":\s*"(bai-[^"]+)",\s*"title":[^}]*"contentType":\s*"reading"[\s\S]*?"motions":\s*\[)([\s\S]*?)(\],\s*"recommendedPrerequisites":)/g, (match, p1, p2, p3, p4) => {
    if (p3.trim().length > 0) {
        console.log('Clearing motions for reading lesson: ' + p2);
        matchCount++;
        return p1 + '\n    ' + p4;
    }
    return match;
});

if (matchCount > 0) {
    fs.writeFileSync(path, content);
    console.log(`Fixed ${matchCount} lessons.`);
} else {
    console.log('No reading lessons with populated motions found.');
}
