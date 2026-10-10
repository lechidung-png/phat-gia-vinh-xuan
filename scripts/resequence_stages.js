const fs = require('fs');
const file = 'src/data/canonicalCatalog.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace lam-quen entirely and re-sequence the rest
content = content.replace(/{\s*id:\s*"lam-quen"[\s\S]*?},\s*{/, '{');

// Re-sequence
content = content.replace(/title:\s*"2\. Nền Tảng Tiểu Niệm Đầu"/, 'title: "1. Nền Tảng Tiểu Niệm Đầu"');
content = content.replace(/title:\s*"3\. Mở Rộng Quyền Pháp"/, 'title: "2. Mở Rộng Quyền Pháp"');
content = content.replace(/title:\s*"4\. Hệ Thống Bài Võ 108 Thế"/, 'title: "3. Hệ Thống Bài Võ 108 Thế"');
content = content.replace(/title:\s*"5\. Cọc Gỗ Mộc Nhân"/, 'title: "4. Cọc Gỗ Mộc Nhân"');
content = content.replace(/title:\s*"6\. Tổng Hợp & Ngũ Hình Quyền"/, 'title: "5. Tổng Hợp & Ngũ Hình Quyền"');
content = content.replace(/title:\s*"7\. Kho Binh Khí Cổ Truyền"/, 'title: "6. Kho Binh Khí Cổ Truyền"');

fs.writeFileSync(file, content);
console.log("Updated CURRICULUM_STAGES");
