const fs = require('fs');
const file = 'src/components/CurriculumExplorer.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#F5D06C]/30 text-center space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/textures/paper-grain.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#F5D06C]/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2A0E0A] to-[#140C08] border-2 border-[#F5D06C]/30 flex items-center justify-center mx-auto text-[#F5D06C] shadow-lg shadow-[#F5D06C]/10 relative z-10">
              <BookOpen className="w-10 h-10" />
            </div>
            
            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#FBF9F5] drop-shadow-md">
                {currentLesson.title}
              </h4>
              <p className="text-sm sm:text-base text-amber-200/80 leading-relaxed font-serif italic px-4">
                {currentLesson.title.includes("Tầm Kiều") ? "Tầm Kiều (tìm cầu bắc cầu) là bài quyền thứ hai, chuyên về di chuyển, phá thế cân bằng của đối thủ và bám sát mục tiêu." :
                 currentLesson.title.includes("Tiêu Chỉ") ? "Tiêu Chỉ (ngón tay xuyên thấu) là bài quyền thứ ba, chứa đựng những đòn thế hiểm hóc, cứu nguy trong cận chiến." :
                 "Phần giới thiệu chuyên sâu về nguồn gốc, triết lý và yếu lĩnh của bài học. Hãy nắm vững những kiến thức nền tảng này trước khi bước vào tập luyện phân thế chiêu thức thực tế."}
              </p>
            </div>
            
            <div className="pt-6 flex justify-center relative z-10 border-t border-[#F5D06C]/10 w-3/4 mx-auto">
              <div className="text-xs text-slate-400 font-mono tracking-widest uppercase">
                Phần Giới Thiệu • Sách Gốc {currentLesson.pageRange || \`Trang PDF \${currentLesson.pdfPages?.[0] || ""}\`}
              </div>
            </div>
          </div>
`;

content = content.replace(/<div className="glass-panel p-8 sm:p-12 rounded-3xl border border-\[#F5D06C\]\/30 text-center space-y-4 shadow-xl">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, replacement.trim());

fs.writeFileSync(file, content);
console.log("Replaced dead-end block");
