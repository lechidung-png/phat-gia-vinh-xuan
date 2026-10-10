const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
let content = fs.readFileSync(file, 'utf8');

// Sửa các dòng desc bị kết thúc bằng \"
content = content.replace(/"desc":\s*"([\s\S]*?)\\\"\s*(\r?\n)/g, '"desc": "$1"$2');

// Kiểm tra xem có desc nào kết thúc bằng \" không
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('"desc":') && l.trim().endsWith('\\"')) {
    console.log(`Line ${i + 1} ends with \\":`, l);
    lines[i] = l.replace(/\\"\s*$/, '"');
  }
});

content = lines.join('\n');
fs.writeFileSync(file, content, 'utf8');
console.log('Fixed unterminated strings in canonicalCatalog.ts');
