const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, '..', 'src', 'data', 'raw');
const noiDungDir = path.join(RAW_DIR, 'noi-dung');
const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');

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

function parseMdData(filename) {
  const filePath = path.join(noiDungDir, filename);
  if (!fs.existsSync(filePath)) return { stepsMap: new Map(), stepsList: [], hMap: new Map() };
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split('\n');

  const stepsMap = new Map();
  const stepsList = [];
  const hMap = new Map();
  let currentChieu = "";

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('#### CHIÊU')) {
      currentChieu = trimmed.replace(/^####\s*/, '').replace(/:\s*$/, '').trim();
    } else {
      // Nhận diện bước: 1- ..., 1.1- ...
      const m = trimmed.match(/^(\d+(?:\.\d+)?)\s*[-:–]\s*(.+)/);
      if (m) {
        const num = m[1];
        const desc = m[2].trim();
        if (desc.length > 5 && !desc.startsWith('Gồm các động tác')) {
          const fullDesc = currentChieu ? `${currentChieu}: ${desc}` : desc;
          stepsMap.set(num, fullDesc);
          stepsList.push({ num, desc: fullDesc });
        }
      }

      // Nhận diện H marker: **H0064 — số trong sách: 1 (OCR, cần đối chiếu)**
      const hMatch = trimmed.match(/\*\*(H\d+)\s*—\s*số trong sách:\s*([^\s\(]+)/);
      if (hMatch) {
        let bookNum = hMatch[2].trim();
        // Sửa OCR phổ biến: "11" -> "1.1", "21" -> "2.1", "41" -> "4.1"
        if (bookNum.length === 2 && !bookNum.includes('.')) {
          bookNum = `${bookNum[0]}.${bookNum[1]}`;
        }
        hMap.set(hMatch[1], bookNum);
      }
    }
  });

  return { stepsMap, stepsList, hMap };
}

// Đọc canonicalCatalog.ts
let catalog = fs.readFileSync(catalogPath, 'utf8');

// Duyệt qua từng bài học trong LESSON_MD_MAP
let updatedCount = 0;
Object.entries(LESSON_MD_MAP).forEach(([lessonId, filename]) => {
  const { stepsMap, stepsList, hMap } = parseMdData(filename);
  
  // Tìm khối lesson trong catalog
  const lessonKey = `"id": "${lessonId}"`;
  const lessonIdx = catalog.indexOf(lessonKey);
  if (lessonIdx === -1) return;

  // Tìm mảng motions của bài học này
  const motionsKey = '"motions": [';
  const motionsIdx = catalog.indexOf(motionsKey, lessonIdx);
  if (motionsIdx === -1) return;

  // Tìm kết thúc mảng motions
  const endMotionsIdx = catalog.indexOf('],', motionsIdx);
  if (endMotionsIdx === -1) return;

  const motionsChunk = catalog.slice(motionsIdx + motionsKey.length, endMotionsIdx);
  
  // Parse từng motion trong chunk bằng regex
  const motionRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]*?"displayId":\s*"([^"]+)"[\s\S]*?"desc":\s*"([^"]*)"\s*\}/g;
  
  let mIdx = 0;
  const newMotionsChunk = motionsChunk.replace(motionRegex, (fullMatch, id, displayId, oldDesc) => {
    let newDesc = "";
    
    // 1. Thử map qua displayId (H-code) -> bookNum -> stepsMap
    const bookNum = hMap.get(displayId);
    if (bookNum && stepsMap.has(bookNum)) {
      newDesc = stepsMap.get(bookNum);
    } else if (bookNum && stepsMap.has(bookNum.replace('.', ''))) {
      newDesc = stepsMap.get(bookNum.replace('.', ''));
    }
    
    // 2. Nếu chưa có, dùng danh sách tuần tự
    if (!newDesc && mIdx < stepsList.length) {
      newDesc = stepsList[mIdx].desc;
    }

    mIdx++;
    if (newDesc) {
      updatedCount++;
      // Làm sạch dấu ngoặc kép bên trong
      const cleanDesc = newDesc.replace(/"/g, '\\"');
      return fullMatch.replace(/"desc":\s*"[^"]*"/, `"desc": "${cleanDesc}"`);
    }
    return fullMatch;
  });

  catalog = catalog.slice(0, motionsIdx + motionsKey.length) + newMotionsChunk + catalog.slice(endMotionsIdx);
});

fs.writeFileSync(catalogPath, catalog, 'utf8');
console.log(`Đã nạp thành công mô tả võ học cho ${updatedCount} động tác vào canonicalCatalog.ts!`);
