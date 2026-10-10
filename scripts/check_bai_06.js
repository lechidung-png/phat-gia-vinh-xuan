const fs = require('fs');
const path = require('path');

// 1. Kiểm tra vị trí của bai-06 trong canonicalCatalog.ts
const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');
const catalogContent = fs.readFileSync(catalogPath, 'utf8');

const regex06 = /\{\s*"id":\s*"bai-06"[\s\S]*?"contentType":\s*"([^"]+)"[\s\S]*?"motions":\s*\[([\s\S]*?)\]\s*,\s*"recommendedPrerequisites"/;
const match06 = catalogContent.match(regex06);
if (match06) {
  console.log('bai-06 contentType:', match06[1]);
  const motionCount = (match06[2].match(/"id":/g) || []).length;
  console.log('bai-06 motions count:', motionCount);
} else {
  console.log('Could not match bai-06');
}
