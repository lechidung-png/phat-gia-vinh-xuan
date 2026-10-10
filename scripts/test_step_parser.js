const fs = require('fs');
const path = require('path');

function parseMarkdownSteps(mdPath) {
  if (!fs.existsSync(mdPath)) return [];
  const text = fs.readFileSync(mdPath, 'utf8');
  
  // Các dòng mô tả động tác thường bắt đầu bằng:
  // "1- ", "1.1- ", "2.1- ", "3- ", "#### CHIÊU"
  const lines = text.split('\n');
  const steps = [];
  let currentChieu = "";

  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('#### CHIÊU')) {
      currentChieu = trimmed.replace(/^####\s*/, '');
    } else {
      // Regex nhận diện các bước: "1- ", "1.1- ", "2.1: ", "1.1 - "
      const m = trimmed.match(/^(\d+(?:\.\d+)?)\s*[-:]\s*(.+)/);
      if (m) {
        steps.push({
          stepNo: m[1],
          chieu: currentChieu,
          desc: m[2].trim(),
          fullText: `${currentChieu ? currentChieu + ' • ' : ''}${m[1]}: ${m[2].trim()}`
        });
      }
    }
  });

  return steps;
}

const tndSteps = parseMarkdownSteps(path.join(__dirname, '..', 'src', 'data', 'raw', 'noi-dung', '07-trang-036-042.md'));
console.log('Tiểu Niệm Đầu parsed steps:', tndSteps.length);
console.log('Sample steps:', tndSteps.slice(0, 5));

const tkSteps = parseMarkdownSteps(path.join(__dirname, '..', 'src', 'data', 'raw', 'noi-dung', '09-trang-044-048.md'));
console.log('Tầm Kiều parsed steps:', tkSteps.length);
console.log('Sample steps:', tkSteps.slice(0, 5));
