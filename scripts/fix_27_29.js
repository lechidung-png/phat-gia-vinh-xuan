const fs = require('fs');
let content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');

// I will clear motions for bai-27 and bai-29, because they are clearly reading theory, not forms.
let count = 0;
content = content.replace(/(\{\s*"id":\s*"(bai-27|bai-29)"[\s\S]*?"motions":\s*\[)([\s\S]*?)(\],\s*"recommendedPrerequisites":)/g, (match, p1, p2, p3, p4) => {
    count++;
    console.log(`Clearing motions for ${p2}`);
    return p1 + '\n    ' + p4;
});

if (count > 0) {
    fs.writeFileSync('src/data/canonicalCatalog.ts', content);
    console.log(`Cleared ${count} lessons.`);
}
