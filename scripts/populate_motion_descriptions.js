const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, '..', 'src', 'data', 'raw');
const noiDungDir = path.join(RAW_DIR, 'noi-dung');
const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');

// Bản đồ liên kết giữa bài học và file markdown nguồn
const LESSON_MD_MAP = {
  "bai-07": "07-trang-036-042.md",
  "bai-09": "09-trang-044-048.md",
  "bai-10": "10-trang-049-053.md",
  "bai-12": "12-trang-055-064.md",
  "bai-13": "13-trang-065-074.md",
  "bai-14": "14-trang-075-082.md",
  "bai-15": "15-trang-083-091.md",
  "bai-17": "17-trang-095-105.md",
  "bai-18": "18-trang-106-116.md",
  "bai-21": "21-trang-120-123.md",
  "bai-22": "22-trang-124-128.md",
  "bai-23": "23-trang-129-132.md",
  "bai-24": "24-trang-133-136.md",
  "bai-25": "25-trang-137-140.md",
  "bai-26": "26-trang-141-145.md",
  "bai-31": "31-trang-191-198.md",
  "con": "32-trang-199-202.md",
  "lieu-diep-kiem": "33-trang-203-206.md"
};

function parseStepsFromMd(filename) {
  const filePath = path.join(noiDungDir, filename);
  if (!fs.existsSync(filePath)) return [];
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split('\n');
  const steps = [];
  let currentChieu = "";

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('#### CHIÊU')) {
      currentChieu = trimmed.replace(/^####\s*/, '').replace(/:\s*$/, '');
    } else {
      // Nhận diện dòng mô tả: "1- ", "1.1- ", "1.1: ", "1.1.- ", "(1)- ", "Chiêu 1: "
      const m = trimmed.match(/^(\d+(?:\.\d+)?)\s*[-:–]\s*(.+)/);
      if (m) {
        const stepNum = m[1];
        const stepDesc = m[2].trim();
        // Bỏ qua các dòng ngắn hoặc tiêu đề phụ
        if (stepDesc.length > 5 && !stepDesc.startsWith('Gồm các động tác')) {
          steps.push({
            stepNum,
            chieu: currentChieu,
            desc: stepDesc,
            display: currentChieu ? `${currentChieu} • Thế ${stepNum}: ${stepDesc}` : `Thế ${stepNum}: ${stepDesc}`
          });
        }
      }
    }
  });

  return steps;
}

// Kiểm tra số lượng bước bóc tách được cho mỗi bài
console.log('--- KẾT QUẢ BÓC TÁCH MÔ TẢ ĐỘNG TÁC TỪ TÀI LIỆU GỐC ---');
Object.entries(LESSON_MD_MAP).forEach(([lessonId, filename]) => {
  const steps = parseStepsFromMd(filename);
  console.log(`${lessonId} (${filename}): ${steps.length} bước mô tả`);
});
