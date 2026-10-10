const fs = require('fs');
const file = 'src/components/CurriculumExplorer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/Sàn Tập Trọng Tâm • Quyền Pháp & Binh Khí/g, 'Quyền Pháp & Binh Khí');
content = content.replace(/Không gian luyện tập thực chiến chuyên sâu\. Bao gồm các bài Quyền tay không/g, 'Các bài Quyền tay không');
content = content.replace(/Hệ Thống Các Phân Hệ Thực Hành:/g, 'Hệ Thống Các Phân Hệ:');
content = content.replace(/Vào Sàn Tập Tiểu Niệm Đầu \(52 Đòn\)/g, 'Xem Tiểu Niệm Đầu (52 đòn)');
content = content.replace(/Bài học này thuộc phần lý luận, lịch sử và tổng quan tư liệu của môn phái\. Để tiếp tục luyện tập thực hành thân pháp và thủ pháp, quý võ sinh vui lòng chọn các bài quyền thực hành dưới đây\./g, 'Bài học này thuộc phần lý thuyết. Vui lòng chọn các bài phân thế dưới đây để xem.');
content = content.replace(/\{lesson\.contentType === "reading" \? "Lý Luận" : "Sàn Tập"\}/g, '{lesson.contentType === "reading" ? "Lý Luận" : "Phân thế"}');
content = content.replace(/\{isSelected \? "Đang chọn xem ✓" : "Nhấp để vào sàn tập"\}/g, '{isSelected ? "Đang chọn xem ✓" : "Nhấp để xem"}');

fs.writeFileSync(file, content);
console.log("Cleaned CurriculumExplorer");
