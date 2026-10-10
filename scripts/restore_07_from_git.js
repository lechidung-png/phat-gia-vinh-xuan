const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
let currentContent = fs.readFileSync(file, 'utf8');

// Lấy bai-07 từ commit 87abb69
const gitContent = execSync('git show 87abb69:src/data/canonicalCatalog.ts', { maxBuffer: 20 * 1024 * 1024 }).toString();

const gitIdx7 = gitContent.indexOf('{\n    "id": "bai-07",');
const gitIdx8 = gitContent.indexOf('{\n    "id": "bai-08",', gitIdx7);
const gitBai07 = gitContent.slice(gitIdx7, gitIdx8).trim();

// Trong currentContent, tìm vị trí bai-07
const curIdx7 = currentContent.indexOf('"id": "bai-07",');
const startObj7 = currentContent.lastIndexOf('{', curIdx7);
const curIdx8 = currentContent.indexOf('"id": "bai-08-1",', curIdx7);
const startObj8 = currentContent.lastIndexOf('{', curIdx8);

console.log('Found positions:', { startObj7, startObj8 });

// Thay thế bai-07 hiện tại bằng gitBai07
currentContent = currentContent.slice(0, startObj7) + gitBai07 + '\n  ' + currentContent.slice(startObj8);
fs.writeFileSync(file, currentContent, 'utf8');

console.log('Restored bai-07 from git commit 87abb69 successfully!');
