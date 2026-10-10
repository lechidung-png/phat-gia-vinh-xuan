const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
let catalog = fs.readFileSync(catalogPath, 'utf8');

// 1. Chuyển bai-27 (Linh giác) và bai-29 (Nội công) sang reading với motions: []
// bai-27
catalog = catalog.replace(
  /("id":\s*"bai-27"[\s\S]*?"contentType":\s*")[^"]+("[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1reading$2[]$3'
);
// bai-29
catalog = catalog.replace(
  /("id":\s*"bai-29"[\s\S]*?"contentType":\s*")[^"]+("[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1reading$2[]$3'
);

// 2. Bổ sung desc cho bai-17-m-79 (Mộc nhân chiêu 80: Đứng tấn thu hồi khí lực)
catalog = catalog.replace(
  /("id":\s*"bai-17-m-79"[\s\S]*?"desc":\s*)"[^"]*"/,
  '$1"Chiêu 80 • Thu thế: Thu hồi kình lực, điều hòa hơi thở, thu quyền về thế kiềm dương ban đầu."'
);

// 3. Đọc tệp 33-trang-203-206.md để lấy các mô tả cuối cho Liễu Diệp Kiếm
const mdKiem = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'raw', 'noi-dung', '33-trang-203-206.md'), 'utf8');
const lines = mdKiem.split('\n');
const kiemSteps = [];
lines.forEach(line => {
  const m = line.trim().match(/^(\d+(?:\.\d+)?)\s*[-:–]\s*(.+)/);
  if (m && m[2].trim().length > 5 && !m[2].trim().startsWith('Gồm')) {
    kiemSteps.push({ num: m[1], desc: m[2].trim() });
  }
});

// Cập nhật các motions còn rỗng của lieu-diep-kiem
const kiemKey = '"id": "lieu-diep-kiem"';
const kiemIdx = catalog.indexOf(kiemKey);
if (kiemIdx !== -1) {
  const endKiem = catalog.indexOf('],', catalog.indexOf('"motions": [', kiemIdx));
  let kiemChunk = catalog.slice(kiemIdx, endKiem);
  
  let stepIdx = 0;
  kiemChunk = kiemChunk.replace(/\{\s*"id":\s*"(lieu-diep-kiem-m-\d+)"[\s\S]*?"desc":\s*"([^"]*)"\s*\}/g, (match, id, desc) => {
    if (!desc || desc.length < 5) {
      const step = kiemSteps[stepIdx] || kiemSteps[kiemSteps.length - 1];
      if (step) {
        return match.replace(/"desc":\s*"[^"]*"/, `"desc": "Thế ${step.num}: ${step.desc.replace(/"/g, '\\"')}"`);
      }
    }
    stepIdx++;
    return match;
  });
  
  catalog = catalog.slice(0, kiemIdx) + kiemChunk + catalog.slice(endKiem);
}

fs.writeFileSync(catalogPath, catalog, 'utf8');
console.log('Final polish of canonicalCatalog.ts complete!');
