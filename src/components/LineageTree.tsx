"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Quote,
  Compass,
  Feather,
  Eye,
  Flame,
  CheckCircle2,
  MapPin,
  Clock,
  Users
} from "lucide-react";

interface PhilosophyQuote {
  id: string;
  topic: string;
  hanNom: string;
  title: string;
  quote: string;
  explanation: string;
  source: string;
  icon: React.ReactNode;
}

const PHILOSOPHY_QUOTES: PhilosophyQuote[] = [
  {
    id: "bat-tranh",
    topic: "Tâm Pháp Bất Tranh & Nhu Đạo",
    hanNom: "不爭以柔克剛",
    title: "Lai Lưu Khứ Tống — Buông Xả Bản Ngã Để Thắng Cường Địch",
    quote:
      "Đến thì mở lòng đón nhận, đi thì nhẹ nhàng đưa tiễn; buông lỏng toàn thân để mượn lực đả lực. Đỉnh cao của Vịnh Xuân không phải là thắng người bằng sức mạnh cơ bắp, mà là chiến thắng chính sự nóng vội và bản ngã của bản thân.",
    explanation:
      "Khẩu quyết 'Lai lưu khứ tống, suất thủ trực xung' dạy người học võ không dùng sức chống sức. Khi địch xông tới thì mượn đà dẫn dắt, khi địch rút lui thì đưa tiễn phóng kình. Trong đối nhân xử thế, đó là nghệ thuật hóa giải xung đột bằng tâm thế mềm mại, nhu hòa mà kiên định.",
    source: "Tâm đắc truyền thừa • Võ sư Lê Đắc Kiên (Võ đường Huỳnh Thúc Kháng)",
    icon: <Feather className="w-5 h-5 text-amber-400" />
  },
  {
    id: "ty-ngo-tuyen",
    topic: "Đạo Trung Tuyến & Trục Tý Ngọ",
    hanNom: "子午中線之道",
    title: "Trung Tuyến — Đạo Trung Tâm & Giữ Thân Tâm Như Dây Dọi",
    quote:
      "Tý Ngọ Tuyến không chỉ là đường ray ngắn nhất để xuất đòn, mà là con đường Trung Đạo trong cuộc sống: Thân giữ trục thẳng đứng, tâm giữ sự tĩnh lặng, đối diện bão táp phong ba với tâm thế điềm nhiên như gương hồ mùa thu.",
    explanation:
      "Khoảng cách ngắn nhất giữa hai điểm là đường thẳng. Giữ chặt trung tâm của mình, chiếm lĩnh trung tâm của đối phương. Khi cột sống giữ thẳng đứng như dây dọi, khí huyết tự khắc lưu thông, tinh thần minh mẫn, không thiên lệch trước cám dỗ hay nghịch cảnh.",
    source: "Triết lý hình học võ học • Phật Gia Vịnh Xuân",
    icon: <Compass className="w-5 h-5 text-emerald-400" />
  },
  {
    id: "thinh-kinh-linh-giac",
    topic: "Thính Kình & Linh Giác Đan Điền",
    hanNom: "聽勁靈覺",
    title: "Lắng Nghe Đối Phương — Động Trong Tĩnh, Tĩnh Trong Động",
    quote:
      "Mắt thấy thì đã chậm, tai nghe thì đã muộn. Chỉ có xúc giác của da thịt qua thế Niêm Thủ và linh giác của Đan Điền mới cảm nhận được ý niệm của đối phương trước khi đòn thế kịp phát tác.",
    explanation:
      "Thính kình là khả năng 'nghe' thấy lực và phương hướng của đối thủ bằng xúc giác điểm tiếp xúc. Khi hai cánh tay dính sát vào nhau, mọi biến chuyển dù nhỏ nhất của cơ bắp địch đều được truyền về hệ thần kinh tức thì, giúp ta phản xạ tự nhiên mà không cần suy nghĩ.",
    source: "Công phu Niêm Thủ • Khẩu quyết truyền thừa",
    icon: <Eye className="w-5 h-5 text-sky-400" />
  },
  {
    id: "thien-vo-nhat-nhu",
    topic: "Thiền Võ Nhất Như",
    hanNom: "禪武一如",
    title: "Luyện Quyền Là Luyện Tâm — Tĩnh Lặng Giữa Muôn Trùng Biến Hóa",
    quote:
      "Trong cái động tột cùng có cái tĩnh sâu xa; trong cái mềm mại như nước ẩn chứa kình lực xuyên thấu như sấm sét. Đấm một cú Nhật Tự Quyền hay đứng một thế Tấn Kiềm Dương cũng chính là một thời khóa thiền định quán chiếu thân tâm.",
    explanation:
      "Khởi nguồn từ Thiền tông Nam Thiếu Lâm, Phật Gia Vịnh Xuân coi võ thuật là phương tiện tu dưỡng đạo đức và sức khỏe. Thả lỏng không phải là yếu đuối, mà là trạng thái cơ bắp không bị co thắt cục bộ, giúp kình lực toàn thân phát xuất từ gốc chân, xoay qua hông và bộc phát ở đầu ngón tay.",
    source: "Phật Gia Vịnh Xuân Quyền • Tông chỉ môn phái",
    icon: <Sparkles className="w-5 h-5 text-amber-300" />
  },
  {
    id: "tan-kiem-duong-tam-phap",
    topic: "Hạ Bàn Kiềm Dương Tấn",
    hanNom: "二字鉗羊心法",
    title: "Chân Hẹp Gốc Sâu — Ghim Rễ Lòng Đất, Tâm Không Dao Động",
    quote:
      "Chân hẹp mà gốc sâu, gối khép mà tâm mở. Tấn Kiềm Dương giúp người luyện ghim rễ vào lòng đất, bảo vệ hạ môn, thu liễm chân khí để nội lực tự động sinh khởi, tâm thế an nhiên vững như bàn thạch.",
    explanation:
      "Khác với các môn phái ngoại gia mở rộng chân, Kiềm Dương Tấn chân hẹp giúp bảo vệ 100% vùng hạ bộ nhạy cảm và tạo độ đàn hồi cao độ ở khớp gối. Người đứng vững hạ bàn thì thân trên mới nhẹ nhàng, linh hoạt luồn lách qua các khe hở của trận địa.",
    source: "Yếu lĩnh hạ bàn • Sách gốc Trang 31 (GS.TS Nguyễn Mạnh Nhâm)",
    icon: <ShieldCheck className="w-5 h-5 text-amber-500" />
  }
];

export const LineageTree: React.FC = () => {
  const [activeQuoteId, setActiveQuoteId] = useState<string>("bat-tranh");
  const activeQuote = PHILOSOPHY_QUOTES.find((q) => q.id === activeQuoteId) || PHILOSOPHY_QUOTES[0];

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-4">
      {/* 1. Header Banner */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#3D291F] text-center space-y-4 relative overflow-hidden shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 text-xs font-bold uppercase tracking-widest">
          <Award className="w-4 h-4" /> Dòng Chảy Võ Học Chân Truyền
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif gold-gradient">
          Sơ Đồ Truyền Thừa & Triết Lý Võ Học
        </h2>
        <p className="text-slate-300 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed">
          Ghi nhận cội nguồn và công lao truyền bá gìn giữ tinh hoa Phật Gia Vịnh Xuân qua các thế hệ tiền bối, từ Sư Tổ Nguyễn Tế Công đến Cố Võ Sư Trần Thúc Tiển, công trình học thuật của GS.TS Y Khoa Nguyễn Mạnh Nhâm và thế hệ Võ sư nòng cốt tiếp nối.
        </p>
      </div>

      {/* 2. Sơ Đồ Cây Truyền Thừa 4 Thế Hệ */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <div className="w-1.5 h-6 bg-[#E2B743] rounded-full"></div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Bốn Thế Hệ Tiếp Nối Ngọn Lửa Di Sản
          </h3>
        </div>

        {/* Node 1: Sư Tổ Nguyễn Tế Công */}
        <div className="glass-panel p-6 rounded-2xl border border-[#E2B743]/40 relative group hover:border-[#E2B743] transition-all shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E2B743]/20 to-[#A67C1E]/40 border-2 border-[#E2B743] flex items-center justify-center text-[#E2B743] font-serif font-black text-3xl shadow-xl shrink-0">
              祖
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="text-xl font-bold font-serif text-white">Sư Tổ Nguyễn Tế Công</h4>
                <span className="text-xs px-2.5 py-0.5 rounded bg-[#E2B743]/20 text-[#E2B743] font-mono">1877 – 1959</span>
              </div>
              <p className="text-xs text-[#E2B743] font-semibold uppercase tracking-wider">
                Sư Tổ Vịnh Xuân Việt Nam (Nguyên quán: Phật Sơn, Quảng Đông)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Người có công truyền bá Vịnh Xuân Quyền sang Việt Nam từ những năm đầu thế kỷ 20. Cụ truyền dạy tại Hà Nội và sau đó là Chợ Lớn (Sài Gòn), đào tạo nên các bậc danh sư lỗi lạc cho nền võ học nước nhà.
              </p>
            </div>
          </div>
        </div>

        {/* Connector Line */}
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#E2B743] to-[#3D291F] mx-auto sm:ml-10"></div>

        {/* Node 2: Cố Võ Sư Trần Thúc Tiển */}
        <div className="sm:ml-8 glass-panel p-6 rounded-2xl border border-[#3D291F] relative group hover:border-[#E2B743]/50 transition-all shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-32 h-44 sm:w-36 sm:h-48 md:w-40 md:h-52 rounded-2xl overflow-hidden border-2 border-[#E2B743]/60 shadow-2xl shrink-0 bg-[#140C08] group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/images/historical/tran_thuc_tien.png"
                alt="Cố Võ sư Trần Thúc Tiển (1912 - 1980)"
                fill
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="text-xl font-bold font-serif text-white">Cố Võ Sư Trần Thúc Tiển</h4>
                <span className="text-xs px-2.5 py-0.5 rounded bg-[#20150F] text-[#E2B743] font-mono border border-[#E2B743]/40 font-bold">1912 – 1980</span>
              </div>
              <p className="text-xs text-[#E2B743] font-semibold uppercase tracking-wider">
                Đại Đệ Tử Xuất Sắc Của Sư Tổ Nguyễn Tế Công Tại Hà Nội
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Học trò đắc ý của cụ Tế Công tại Hà Nội, nổi danh với công phu nội kình thâm hậu, linh giác nhạy bén và tấm lòng đức độ. Cụ đã dày công gìn giữ và truyền thụ lại cho các thế hệ học trò tinh anh.
              </p>
            </div>
          </div>
        </div>

        {/* Connector Line */}
        <div className="w-0.5 h-8 bg-[#3D291F] mx-auto sm:ml-16"></div>

        {/* Node 3: GS.TS Nguyễn Mạnh Nhâm & ThS. Nguyễn Duy Thức */}
        <div className="sm:ml-14 glass-panel p-6 rounded-2xl border border-[#10B981]/40 relative group hover:border-[#10B981] transition-all shadow-xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-20 h-20 rounded-2xl bg-[#10B981]/15 border-2 border-[#10B981] flex items-center justify-center text-[#10B981] font-serif font-black text-2xl shadow-xl shrink-0">
              佛
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h4 className="text-lg font-bold font-serif text-white">
                  GS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS. Nguyễn Duy Thức
                </h4>
              </div>
              <p className="text-xs text-[#10B981] font-semibold uppercase tracking-wider">
                Tác Giả Công Trình &ldquo;Phật Gia Vịnh Xuân Quyền&rdquo; (225 Trang • NXB Văn Hóa Thông Tin 2012)
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                GS.TS Y Khoa Nguyễn Mạnh Nhâm (học trò đầu của Võ sư Trần Thúc Tiển) cùng con trai là ThS-DS Nguyễn Duy Thức đã đúc kết hơn nửa thế kỷ luyện tập và nghiên cứu y võ, hệ thống hóa toàn bộ giáo trình Phật Gia Vịnh Xuân để truyền lại cho muôn đời sau.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-[#140C08] text-slate-300 border border-[#3D291F] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#E2B743]" /> Sách xuất bản 2012 (225 trang)
                </span>
                <span className="px-2.5 py-1 rounded bg-[#140C08] text-slate-300 border border-[#3D291F] flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#10B981]" /> Y Võ Kết Hợp
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Connector Line */}
        <div className="w-0.5 h-8 bg-[#3D291F] mx-auto sm:ml-24"></div>

        {/* Node 4: Võ Sư Lê Đắc Kiên - Võ Đường Huỳnh Thúc Kháng */}
        <div className="sm:ml-20 glass-panel p-6 sm:p-7 rounded-2xl border-2 border-[#E2B743]/60 relative group hover:border-[#E2B743] transition-all bg-gradient-to-br from-[#1C120B] to-[#120B07] shadow-2xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Ảnh chân dung Võ sư Lê Đắc Kiên - To rõ & trang trọng */}
            <div className="relative w-44 h-58 sm:w-52 sm:h-68 md:w-56 md:h-72 rounded-3xl overflow-hidden border-2 border-[#E2B743] shadow-2xl shrink-0 bg-[#0F0805] group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/images/instructors/vo_su_le_dac_kien.jpg"
                alt="Võ sư Lê Đắc Kiên - Phụ trách Võ đường Huỳnh Thúc Kháng"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-2 inset-x-2 text-center">
                <span className="text-xs font-mono font-bold text-[#E2B743] bg-black/85 px-3 py-1 rounded-full border border-[#E2B743]/50 shadow">
                  Võ Sư Nòng Cốt
                </span>
              </div>
            </div>

            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Võ Sư Lê Đắc Kiên
                </h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E2B743]/20 text-[#E2B743] font-bold border border-[#E2B743]/40">
                  Phụ Trách Võ Đường Huỳnh Thúc Kháng
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-amber-200/90 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E2B743]" /> Võ Đường Huỳnh Thúc Kháng (Hà Nội)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#10B981]" /> Hơn 20 năm công phu Vịnh Xuân
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-sky-400" /> Thế hệ học trò nòng cốt của GS.TS Nguyễn Mạnh Nhâm
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Là một trong 11 Võ sư nòng cốt kỳ cựu được ghi danh chính thức trong tác phẩm kinh điển <em>Phật Gia Vịnh Xuân Quyền</em> (2012). Võ sư Lê Đắc Kiên hiện phụ trách giảng dạy và truyền lửa tại Võ đường Huỳnh Thúc Kháng, kiên trì gìn giữ phương pháp sư phạm y võ chuẩn xác, rèn giũa thân tâm và khai mở linh giác cho hàng trăm môn sinh theo đúng tinh thần Thiền Võ Phật Gia.
              </p>

              <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#3D291F] text-xs text-amber-100/90 italic flex items-start gap-2">
                <Quote className="w-4 h-4 text-[#E2B743] shrink-0 mt-0.5 rotate-180" />
                <span>
                  &ldquo;Tập Vịnh Xuân không cốt để thắng người, mà để tĩnh tại trước vạn biến, gìn giữ tâm hồn thanh tịnh và nâng cao sinh lực nội tại.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Phân Hệ: Triết Lý Sâu Xa Của Vịnh Xuân & Tâm Đạo Võ Sư Lê Đắc Kiên */}
      <section className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#3D291F] space-y-8 bg-gradient-to-b from-[#180E09] to-[#0F0805] shadow-2xl">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Minh Triết & Khẩu Quyết Võ Đạo
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
            Triết Lý Sâu Xa Của Phật Gia Vịnh Xuân
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Những đúc kết tâm huyết về đạo học, giải phẫu, chuyển hóa nội kình và nhân sinh quan từ Võ sư Lê Đắc Kiên và các bậc danh sư tiền bối.
          </p>
        </div>

        {/* Tab Selector Cho 5 Chủ Đề Triết Lý */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {PHILOSOPHY_QUOTES.map((q) => {
            const isActive = q.id === activeQuoteId;
            return (
              <button
                key={q.id}
                onClick={() => setActiveQuoteId(q.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  isActive
                    ? "bg-[#E2B743]/15 border-[#E2B743] text-white shadow-lg shadow-[#E2B743]/10"
                    : "bg-[#140C08] border-[#3D291F] text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="p-1 rounded-lg bg-black/40 border border-white/10">
                    {q.icon}
                  </span>
                  <span className="text-[10px] font-mono text-amber-200/60">
                    {q.hanNom}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold block leading-snug">
                    {q.topic}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Khối Trưng Bày Danh Ngôn Trung Tâm (Hero Quote Card) */}
        <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#20130B] via-[#1A0E08] to-[#120804] border-2 border-[#E2B743]/50 shadow-2xl overflow-hidden">
          {/* Watermark hoa văn Phật */}
          <div className="absolute top-2 right-4 text-7xl sm:text-9xl font-serif font-black text-white/[0.03] select-none pointer-events-none">
            佛
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10">
            {/* Ảnh chân dung nhỏ kèm info */}
            <div className="text-center lg:text-left shrink-0 space-y-3">
              <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#E2B743] shadow-xl mx-auto lg:mx-0">
                <Image
                  src="/assets/images/instructors/vo_su_le_dac_kien.jpg"
                  alt="Võ sư Lê Đắc Kiên"
                  fill
                  sizes="130px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <h5 className="font-bold text-white text-sm font-serif">
                  Võ Sư Lê Đắc Kiên
                </h5>
                <p className="text-[11px] text-[#E2B743] font-mono">
                  Võ Đường Huỳnh Thúc Kháng
                </p>
                <span className="text-[10px] text-slate-400 block">
                  Phật Gia Vịnh Xuân
                </span>
              </div>
            </div>

            {/* Nội dung danh ngôn sâu xa */}
            <div className="space-y-4 flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Quote className="w-8 h-8 text-[#E2B743] opacity-80 rotate-180" />
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#E2B743]">
                  {activeQuote.topic}
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-serif text-white font-semibold leading-relaxed tracking-wide">
                &ldquo;{activeQuote.quote}&rdquo;
              </blockquote>

              <div className="p-4 rounded-2xl bg-black/40 border border-[#3D291F] space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
                <strong className="text-amber-300 flex items-center gap-1.5 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981]" /> Luận Giải Ý Nghĩa Võ Đạo:
                </strong>
                <p>{activeQuote.explanation}</p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-[#3D291F]/60">
                <span>{activeQuote.source}</span>
                <span className="font-mono text-amber-200/60 hidden sm:inline">
                  {activeQuote.hanNom}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trụ Cột Triết Lý Đạo Võ Cốt Lõi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-2">
            <div className="flex items-center gap-2 text-[#E2B743]">
              <Compass className="w-4 h-4" />
              <h5 className="font-bold text-sm font-serif">1. Không Cưỡng Cầu</h5>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Không dùng sức cơ bắp chống lại lực đối phương. Kẻ dùng ngàn cân lực đến, ta chỉ dùng vài lạng kình mượn đà triệt tiêu.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-2">
            <div className="flex items-center gap-2 text-[#10B981]">
              <Eye className="w-4 h-4" />
              <h5 className="font-bold text-sm font-serif">2. Lắng Nghe & Thấu Cảm</h5>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tập trung linh giác vào Đan Điền và đôi tay dính dắt. Cảm nhận được sự chuyển dịch kình lực của đối phương trước khi mắt nhìn thấy.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-2">
            <div className="flex items-center gap-2 text-sky-400">
              <Sparkles className="w-4 h-4" />
              <h5 className="font-bold text-sm font-serif">3. Hòa Hợp & Dưỡng Sinh</h5>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mục tiêu tối thượng của võ học là khai thông kinh mạch, tôi luyện ý chí kiên định và giữ tâm hồn an nhiên giữa cuộc sống hiện đại.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};
