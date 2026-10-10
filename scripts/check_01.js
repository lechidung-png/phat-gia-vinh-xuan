const fs = require('fs');
const content = fs.readFileSync('src/data/canonicalCatalog.ts', 'utf8');

const regex = /"id":\s*"bai-01"[\s\S]*?"contentType":\s*"([^"]+)"/;
const match = regex.exec(content);
if (match) {
  console.log("bai-01 content type:", match[1]);
} else {
  console.log("bai-01 not found");
}
