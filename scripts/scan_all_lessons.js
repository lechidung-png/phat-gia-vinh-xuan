const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
const content = fs.readFileSync(catalogPath, 'utf8');

// Parse lessons from content
const lessonsRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"contentType":\s*"([^"]+)"[\s\S]*?"motions":\s*\[([\s\S]*?)\]\s*,\s*"recommendedPrerequisites"/g;

let match;
console.log('--- KIỂM TRA TẤT CẢ CÁC BÀI CÓ MOTIONS TRONG CANONICAL_LESSONS ---');
while ((match = lessonsRegex.exec(content)) !== null) {
  const id = match[1];
  const title = match[2];
  const contentType = match[3];
  const motionsStr = match[4];
  const count = (motionsStr.match(/"id":/g) || []).length;
  if (count > 0 || contentType === 'reading') {
    console.log(`[${id}] contentType: ${contentType} | motions: ${count} | title: ${title}`);
  }
}
