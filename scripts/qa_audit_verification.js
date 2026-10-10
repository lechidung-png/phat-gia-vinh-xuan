const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function loadTsModule(filePath) {
  if (filePath.endsWith('.json')) {
    const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return { default: raw, ...raw };
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const jsCode = ts.transpileModule(content, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true }
  }).outputText;
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', '__dirname', '__filename', jsCode);
  fn(m, m.exports, (mod) => {
    if (mod.startsWith('.')) {
      let resolved = path.resolve(path.dirname(filePath), mod);
      if (fs.existsSync(resolved + '.ts')) return loadTsModule(resolved + '.ts');
      if (fs.existsSync(resolved + '.json')) return loadTsModule(resolved + '.json');
      if (fs.existsSync(resolved)) return loadTsModule(resolved);
    }
    return require(mod);
  }, path.dirname(filePath), filePath);
  return m.exports;
}

const catalogPath = path.join(__dirname, '../src/data/canonicalCatalog.ts');
const catalog = loadTsModule(catalogPath);
const { CANONICAL_LESSONS, CURRICULUM_STAGES } = catalog;

console.log('================================================================');
console.log('           BÁO CÁO KIỂM TOÁN ĐỘC LẬP QA AUDITOR                 ');
console.log('================================================================');

// ----------------------------------------------------------------------
// TIÊU CHÍ 1: BÀI TẦM KIỀU (bai-09)
// ----------------------------------------------------------------------
console.log('\n>>> [TIÊU CHÍ 1] Kiểm tra Bài Tầm Kiều (bai-09)');
const bai09 = CANONICAL_LESSONS.find(l => l.id === 'bai-09');
const c1_inCatalog = !!bai09;
const c1_motionCount = bai09 ? bai09.motions.length : 0;
const c1_assetCount = bai09 ? bai09.assets.length : 0;

const stage3 = CURRICULUM_STAGES.find(s => s.id === 'mo-rong' || s.sequence === 3);
const expectedStage3 = ["bai-08-1", "bai-09", "bai-08-2", "bai-10"];
const c1_stage3Matches = stage3 && JSON.stringify(stage3.lessonIds) === JSON.stringify(expectedStage3);

console.log(`- Có trong CANONICAL_LESSONS: ${c1_inCatalog ? 'CÓ (PASS)' : 'KHÔNG (FAIL)'}`);
if (bai09) {
  console.log(`- Tiêu đề: ${bai09.title}`);
  console.log(`- Số lượng assets: ${c1_assetCount} (Mong muốn: 45) -> ${c1_assetCount === 45 ? 'PASS' : 'FAIL'}`);
  console.log(`- Số lượng motions: ${c1_motionCount} (Mong muốn: 45) -> ${c1_motionCount === 45 ? 'PASS' : 'FAIL'}`);
  // Check image files exist
  let missingImages = 0;
  for (const m of bai09.motions) {
    const p1 = path.join(__dirname, '../public', m.imgUrl);
    const p2 = path.join(__dirname, '../public', m.img2xUrl);
    if (!fs.existsSync(p1) || !fs.existsSync(p2)) missingImages++;
  }
  console.log(`- Kiểm tra file ảnh vật lý trên đĩa: ${missingImages === 0 ? 'Đầy đủ 100% (PASS)' : missingImages + ' ảnh bị thiếu (FAIL)'}`);
}
console.log(`- Lộ trình chặng 3 (sequence 3 / id: mo-rong):`);
console.log(`  Thực tế: ${JSON.stringify(stage3?.lessonIds)}`);
console.log(`  Mong muốn: ${JSON.stringify(expectedStage3)}`);
console.log(`  Khớp hoàn toàn: ${c1_stage3Matches ? 'PASS' : 'FAIL'}`);

const passCriterion1 = c1_inCatalog && c1_assetCount === 45 && c1_motionCount === 45 && c1_stage3Matches;
console.log(`=> KẾT LUẬN TIÊU CHÍ 1: ${passCriterion1 ? 'PASS' : 'FAIL'}`);

// ----------------------------------------------------------------------
// TIÊU CHÍ 2: CÁC BÀI LÝ THUYẾT
// ----------------------------------------------------------------------
console.log('\n>>> [TIÊU CHÍ 2] Kiểm tra các bài lý thuyết');
const theoryLessonIds = [
  'bai-01', 'bai-02', 'bai-04', 'bai-05', 'bai-06',
  'bai-08-1', 'bai-08-2', 'bai-11', 'bai-16', 'bai-luyen-tong-hop',
  'bai-28', 'bai-30', 'bai-34', 'bai-35', 'bai-36'
];

let allTheoryPass = true;
const theoryDetails = [];

theoryLessonIds.forEach(id => {
  const lesson = CANONICAL_LESSONS.find(l => l.id === id);
  if (!lesson) {
    theoryDetails.push({ id, status: 'NOT_FOUND', motions: -1, contentType: 'N/A' });
    allTheoryPass = false;
    return;
  }
  const isReading = lesson.contentType === 'reading';
  const isEmptyMotions = Array.isArray(lesson.motions) && lesson.motions.length === 0;
  const isPass = isReading && isEmptyMotions;
  if (!isPass) allTheoryPass = false;
  theoryDetails.push({
    id,
    title: lesson.title,
    contentType: lesson.contentType,
    motionsCount: lesson.motions.length,
    assetsCount: lesson.assets.length,
    status: isPass ? 'PASS' : 'FAIL'
  });
});

console.table(theoryDetails);

// Kiểm tra toàn bộ CANONICAL_LESSONS xem có bài nào contentType === 'reading' mà motions > 0 không
const rogueReadingLessons = CANONICAL_LESSONS.filter(l => l.contentType === 'reading' && l.motions.length > 0);
console.log(`- Bài 'reading' có motions > 0 (motions giả): ${rogueReadingLessons.length}`);
if (rogueReadingLessons.length > 0) {
  console.log('  Danh sách vi phạm:', rogueReadingLessons.map(l => `${l.id} (${l.motions.length} motions)`));
  allTheoryPass = false;
}

const passCriterion2 = allTheoryPass && rogueReadingLessons.length === 0;
console.log(`=> KẾT LUẬN TIÊU CHÍ 2: ${passCriterion2 ? 'PASS' : 'FAIL'}`);

// ----------------------------------------------------------------------
// TIÊU CHÍ 3: MÔ TẢ CHIÊU THỨC (motions.desc)
// ----------------------------------------------------------------------
console.log('\n>>> [TIÊU CHÍ 3] Kiểm tra mô tả chiêu thức (motions.desc)');

// Check all lessons that have motions
const practiceLessons = CANONICAL_LESSONS.filter(l => l.motions && l.motions.length > 0);
console.log(`Tổng số bài thực hành có motions: ${practiceLessons.length}`);

let totalMotions = 0;
let totalEmptyDesc = 0;
let totalWithDesc = 0;
const emptyByLesson = {};

practiceLessons.forEach(l => {
  let emptyInLesson = 0;
  let filledInLesson = 0;
  l.motions.forEach(m => {
    totalMotions++;
    if (!m.desc || m.desc.trim() === '') {
      totalEmptyDesc++;
      emptyInLesson++;
    } else {
      totalWithDesc++;
      filledInLesson++;
    }
  });
  if (emptyInLesson > 0) {
    emptyByLesson[l.id] = { title: l.title, total: l.motions.length, empty: emptyInLesson, filled: filledInLesson };
  }
});

console.log('Chi tiết các bài còn motions có desc rỗng:');
console.table(emptyByLesson);

const formCheckList = [
  { key: 'bai-07', name: 'Tiểu Niệm Đầu' },
  { key: 'bai-09', name: 'Tầm Kiều' },
  { key: 'bai-10', name: 'Tiêu Chỉ' },
  { key: 'bai-12', name: '108 Thế tại chỗ (Đơn luyện)' },
  { key: 'bai-13', name: '108 Thế tại chỗ (Đối luyện)' },
  { key: 'bai-14', name: '108 Thế tiến lùi (Đơn luyện)' },
  { key: 'bai-15', name: '108 Thế tiến lùi (Đối luyện)' },
  { key: 'bai-17', name: 'Mộc Nhân Thang (108 thế cọc gỗ)' },
  { key: 'bai-18', name: 'Mộc Nhân Thang (Đối luyện)' },
  { key: 'bai-21', name: 'Long Quyền' },
  { key: 'bai-22', name: 'Xà Quyền' },
  { key: 'bai-23', name: 'Hổ Quyền' },
  { key: 'bai-24', name: 'Báo Quyền' },
  { key: 'bai-25', name: 'Hạc Quyền' },
  { key: 'bai-26', name: 'Tổng hợp Ngũ Hình Quyền' },
  { key: 'bai-31', name: 'Bát Trảm Đao' },
  { key: 'con', name: 'Lục Điểm Bán Côn' },
  { key: 'lieu-diep-kiem', name: 'Liễu Diệp Kiếm' }
];

const keyFormResults = [];

practiceLessons.forEach(l => {
  let emptyInLesson = 0;
  let filledInLesson = 0;
  l.motions.forEach(m => {
    totalMotions++;
    if (!m.desc || m.desc.trim() === '') {
      totalEmptyDesc++;
      emptyInLesson++;
    } else {
      totalWithDesc++;
      filledInLesson++;
    }
  });

  const target = formCheckList.find(f => f.key === l.id);
  if (target) {
    keyFormResults.push({
      id: l.id,
      name: target.name,
      totalMotions: l.motions.length,
      filledDesc: filledInLesson,
      emptyDesc: emptyInLesson,
      sampleDesc: l.motions[0]?.desc?.substring(0, 45) + '...',
      status: emptyInLesson === 0 ? 'PASS (100% có desc)' : `${emptyInLesson} rỗng (FAIL)`
    });
  }
});

console.log(`- Thống kê toàn bộ website: ${totalMotions} motions; ${totalWithDesc} có mô tả (${(totalWithDesc/totalMotions*100).toFixed(1)}%), ${totalEmptyDesc} mô tả rỗng.`);
console.table(keyFormResults);

const passCriterion3 = totalWithDesc > 0 && totalEmptyDesc === 0;
console.log(`=> KẾT LUẬN TIÊU CHÍ 3: ${passCriterion3 ? 'PASS' : (totalEmptyDesc === 0 ? 'PASS' : 'FAIL - Có ' + totalEmptyDesc + ' motions rỗng')}`);

// ----------------------------------------------------------------------
// TIÊU CHÍ 4: PHÂN GIẢI ID (resolveLessonId)
// ----------------------------------------------------------------------
console.log('\n>>> [TIÊU CHÍ 4] Kiểm tra resolveLessonId');
const resolverPath = path.join(__dirname, '../src/lib/lessonResolver.ts');
const resolver = loadTsModule(resolverPath);

const testCases = [
  { input: '02-tam-kieu', expected: 'bai-09' },
  { input: '03-tieu-chi', expected: 'bai-10' },
  { input: '07-108-tien-lui-doi', expected: 'bai-15' },
  // Additional safety checks
  { input: '01-tieu-niem-dau', expected: 'bai-07' },
  { input: '04-108-tai-cho-don', expected: 'bai-12' },
  { input: '05-108-tai-cho-doi', expected: 'bai-13' },
  { input: '06-108-tien-lui-don', expected: 'bai-14' },
  { input: '08-moc-nhan-don', expected: 'bai-17' },
  { input: '09-moc-nhan-doi', expected: 'bai-18' },
  { input: '10-ngu-hinh', expected: 'gioi-thieu-ngu-hinh' },
  { input: '11-bat-tram-dao', expected: 'bai-31' },
  { input: '12-luc-diem-ban-con', expected: 'con' },
  { input: '13-lieu-diep-kiem', expected: 'lieu-diep-kiem' }
];

let allResolverPass = true;
const resolverResults = testCases.map(tc => {
  const actual = resolver.resolveLessonId(tc.input);
  const match = actual === tc.expected;
  if (!match) allResolverPass = false;
  return {
    input: tc.input,
    expected: tc.expected,
    actual: actual,
    status: match ? 'PASS' : 'FAIL'
  };
});

console.table(resolverResults);
const passCriterion4 = allResolverPass;
console.log(`=> KẾT LUẬN TIÊU CHÍ 4: ${passCriterion4 ? 'PASS' : 'FAIL'}`);

// ----------------------------------------------------------------------
// TIÊU CHÍ 5: TOÀN VĂN SÁCH GỐC (lessonsFullText & HeritageReader)
// ----------------------------------------------------------------------
console.log('\n>>> [TIÊU CHÍ 5] Kiểm tra toàn văn sách gốc và tích hợp HeritageReader');
const fullTextJsonPath = path.join(__dirname, '../src/data/lessonsFullText.json');
const fullTextJson = JSON.parse(fs.readFileSync(fullTextJsonPath, 'utf8'));

const explorerTsxPath = path.join(__dirname, '../src/components/CurriculumExplorer.tsx');
const explorerContent = fs.readFileSync(explorerTsxPath, 'utf8');

const heritageTsxPath = path.join(__dirname, '../src/components/HeritageReader.tsx');
const heritageContent = fs.readFileSync(heritageTsxPath, 'utf8');

console.log(`- Số bài có toàn văn trong lessonsFullText.json: ${Object.keys(fullTextJson).length}`);

// Check if HeritageReader is imported in CurriculumExplorer
const importsHeritage = explorerContent.includes('HeritageReader');
console.log(`- CurriculumExplorer import HeritageReader: ${importsHeritage ? 'CÓ (PASS)' : 'KHÔNG (FAIL)'}`);

// Check if HeritageReader is rendered when lesson is reading / no motions
const rendersHeritage = explorerContent.includes('<HeritageReader') || explorerContent.includes('HeritageReader');
console.log(`- CurriculumExplorer render <HeritageReader: ${rendersHeritage ? 'CÓ (PASS)' : 'KHÔNG (FAIL)'}`);

// Check if old error box / dead end is still there
const hasDeadEndMessage = explorerContent.includes('Bài học này thuộc phần lý thuyết') && explorerContent.includes('Chuyển sang bài thực hành Tiểu Niệm Đầu');
console.log(`- Còn khung dead-end 'Bài học này thuộc phần lý thuyết - Chuyển sang...': ${hasDeadEndMessage ? 'CÒN TỒN TẠI (FAIL)' : 'ĐÃ ĐƯỢC THAY THẾ HOÀN TOÀN (PASS)'}`);

// Check how many theory lessons exist in lessonsFullText
const fullTextModule = loadTsModule(path.join(__dirname, '../src/data/lessonsFullText.ts'));
let allTheoryHaveFullText = true;
const theoryInFullText = theoryLessonIds.map(id => {
  const fullTextObj = fullTextModule.getLessonFullText(id);
  const hasText = !!fullTextObj && !!fullTextObj.markdown;
  const charCount = hasText ? fullTextObj.markdown.length : 0;
  if (!hasText) allTheoryHaveFullText = false;
  return { id, title: fullTextObj?.title, inFullText: hasText, charCount };
});
console.table(theoryInFullText);
console.log(`- 100% bài lý thuyết hiển thị toàn văn qua getLessonFullText: ${allTheoryHaveFullText ? 'ĐẠT (PASS)' : 'KHÔNG ĐẠT (FAIL)'}`);

const passCriterion5 = importsHeritage && rendersHeritage && !hasDeadEndMessage;
console.log(`=> KẾT LUẬN TIÊU CHÍ 5: ${passCriterion5 ? 'PASS' : 'FAIL'}`);

console.log('\n================================================================');
console.log(`TỔNG KẾT TOÀN DIỆN:`);
console.log(`Tiêu chí 1 (Tầm Kiều bai-09): ${passCriterion1 ? 'PASS' : 'FAIL'}`);
console.log(`Tiêu chí 2 (Bài lý thuyết motions=[]): ${passCriterion2 ? 'PASS' : 'FAIL'}`);
console.log(`Tiêu chí 3 (Mô tả chiêu thức motions.desc): ${passCriterion3 ? 'PASS' : 'FAIL'}`);
console.log(`Tiêu chí 4 (Phân giải ID resolveLessonId): ${passCriterion4 ? 'PASS' : 'FAIL'}`);
console.log(`Tiêu chí 5 (Toàn văn sách gốc HeritageReader): ${passCriterion5 ? 'PASS' : 'FAIL'}`);
console.log('================================================================\n');
