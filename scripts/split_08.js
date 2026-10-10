const fs = require('fs');
const file = 'src/data/canonicalCatalog.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace bai-08 with two separate entries
const bai08Replacement = `
  {
    "id": "bai-08-1",
    "title": "Giới thiệu Tầm Kiều",
    "groupId": "quyen-tay-khong",
    "bookOrder": 8,
    "contentType": "reading",
    "pdfPages": [43],
    "pageRange": "Trang PDF 43",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": ["bai-07"]
  },
  {
    "id": "bai-08-2",
    "title": "Giới thiệu Tiêu Chỉ",
    "groupId": "quyen-tay-khong",
    "bookOrder": 8,
    "contentType": "reading",
    "pdfPages": [43],
    "pageRange": "Trang PDF 43",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": ["bai-08-1"]
  },`;

// Find the exact match for bai-08 to replace it
content = content.replace(/\{\s*"id": "bai-08"[\s\S]*?"recommendedPrerequisites": \[\]\s*\},/, bai08Replacement.trim() + ',');

// Also update the references in CURRICULUM_STAGES
content = content.replace(/"bai-08", "bai-09", "bai-10"/g, '"bai-08-1", "bai-09", "bai-08-2", "bai-10"');
content = content.replace(/"bai-08",\s*"bai-09",\s*"bai-10"/g, '"bai-08-1", "bai-09", "bai-08-2", "bai-10"');

fs.writeFileSync(file, content);
console.log("Split bai-08 into bai-08-1 and bai-08-2");
