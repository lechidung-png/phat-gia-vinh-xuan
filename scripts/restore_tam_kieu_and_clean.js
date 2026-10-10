const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, '..', 'src', 'data', 'raw');
const catalogPath = path.join(__dirname, '..', 'src', 'data', 'canonicalCatalog.ts');

const taiSanList = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'tai-san-website.json'), 'utf8'));
const taiSanMap = new Map();
taiSanList.forEach(a => taiSanMap.set(a.asset_id, a));

const noiDungList = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'danh-muc-noi-dung.json'), 'utf8'));
const source09 = noiDungList.find(i => i.id === 'source-09');

// 1. Tạo assets và motions cho bai-09
const bai09Assets = (source09.asset_ids || []).map(aid => {
  const raw = taiSanMap.get(aid);
  if (!raw) return null;
  return {
    assetId: raw.asset_id,
    displayId: raw.display_id,
    pdfPage: raw.pdf_page,
    imgUrl: `/assets/${raw.restored_path}`,
    img2xUrl: `/assets/${raw.upscaled_path}`,
    width: raw.width,
    height: raw.height
  };
}).filter(Boolean);

const bai09Motions = bai09Assets.map((asset, idx) => ({
  id: `bai-09-m-${idx + 1}`,
  stepNo: `${idx + 1}`,
  assetId: asset.assetId,
  displayId: asset.displayId,
  pdfPage: asset.pdfPage,
  imgUrl: asset.imgUrl,
  img2xUrl: asset.img2xUrl,
  width: asset.width,
  height: asset.height,
  desc: `Động tác ${idx + 1} bài Tầm Kiều (Trang PDF ${asset.pdfPage})`
}));

const bai09Object = {
  id: "bai-09",
  title: "Tầm Kiều",
  groupId: "quyen-tay-khong",
  bookOrder: 9,
  contentType: "practice_or_mixed",
  pdfPages: [44, 45, 46, 47, 48],
  pageRange: "Trang PDF 44 – 48",
  assetCount: bai09Assets.length,
  assets: bai09Assets,
  motions: bai09Motions,
  recommendedPrerequisites: ["bai-08-1"]
};

console.log(`Đã chuẩn bị xong bài Tầm Kiều (bai-09): ${bai09Motions.length} motions, ${bai09Assets.length} assets.`);

// 2. Đọc file canonicalCatalog.ts
let catalog = fs.readFileSync(catalogPath, 'utf8');

// 2.1 Xóa motions của bai-06 (biến thành bài lý thuyết thuần túy)
catalog = catalog.replace(
  /("id":\s*"bai-06"[\s\S]*?"contentType":\s*")practice_or_mixed("[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1reading$2[]$3'
);
// Trường hợp bai-06 đã là reading nhưng còn motions
catalog = catalog.replace(
  /("id":\s*"bai-06"[\s\S]*?"contentType":\s*"reading"[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1[]$2'
);

// 2.2 Xóa motions của bai-luyen-tong-hop
catalog = catalog.replace(
  /("id":\s*"bai-luyen-tong-hop"[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1[]$2'
);

// 2.3 Xóa motions của bai-28
catalog = catalog.replace(
  /("id":\s*"bai-28"[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1[]$2'
);

// 2.4 Xóa motions của bai-35
catalog = catalog.replace(
  /("id":\s*"bai-35"[\s\S]*?"motions":\s*)\[[\s\S]*?\](\s*,\s*"recommendedPrerequisites")/g,
  '$1[]$2'
);

// 3. Chèn bai-09 vào sau bai-08-2 (nếu chưa có)
if (!catalog.includes('"id": "bai-09"')) {
  const bai09Json = JSON.stringify(bai09Object, null, 2);
  const target = '"id": "bai-08-2"';
  const targetIdx = catalog.indexOf(target);
  if (targetIdx !== -1) {
    // Tìm dấu đóng ngoặc nhọn kết thúc bai-08-2
    const closeBraceIdx = catalog.indexOf('},', targetIdx);
    if (closeBraceIdx !== -1) {
      const insertPos = closeBraceIdx + 2; // ngay sau "},"
      catalog = catalog.slice(0, insertPos) + '\n  ' + bai09Json + ',' + catalog.slice(insertPos);
      console.log('Đã chèn bai-09 vào sau bai-08-2 thành công!');
    } else {
      console.error('Không tìm thấy dấu đóng ngoặc của bai-08-2');
    }
  } else {
    console.error('Không tìm thấy bai-08-2');
  }
} else {
  console.log('bai-09 đã tồn tại trong file.');
}

fs.writeFileSync(catalogPath, catalog, 'utf8');
console.log('Đã cập nhật canonicalCatalog.ts hoàn tất!');
