const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
let content = fs.readFileSync(file, 'utf8');

const target = '"id": "bai-luyen-tong-hop",';
const idx = content.indexOf(target);
if (idx !== -1) {
  const nextOrder = content.indexOf('"bookOrder": 19,', idx);
  if (nextOrder !== -1) {
    const insertPos = nextOrder + '"bookOrder": 19,'.length;
    // Check if contentType is already there
    const nextChunk = content.slice(insertPos, insertPos + 100);
    if (!nextChunk.includes('"contentType"')) {
      content = content.slice(0, insertPos) + '\n    "contentType": "reading",' + content.slice(insertPos);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Successfully inserted contentType: reading for bai-luyen-tong-hop');
    } else {
      console.log('contentType already present');
    }
  }
}
