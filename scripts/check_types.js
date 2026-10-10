const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');

const regex = /"id":\s*"([^"]+)"[\s\S]*?"contentType":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  if (['bai-01', 'bai-02', 'bai-03', 'bai-04', 'bai-05', 'bai-06'].includes(match[1])) {
    console.log(match[1], match[2]);
  }
}
