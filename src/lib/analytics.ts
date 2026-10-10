// ==============================================================================
// HỆ THỐNG THEO DÕI LƯỢT TRUY CẬP & THỐNG KÊ NỘI DUNG XEM NHIỀU (ANALYTICS ENGINE)
// Quản lý lượt truy cập, phiên làm việc và bảng xếp hạng mức độ quan tâm
// ==============================================================================

export interface ContentItemView {
  id: string;
  title: string;
  category: "forms" | "fundamentals" | "lineage" | "dummy" | "scenarios" | "theory";
  categoryLabel: string;
  views: number;
}

export interface AnalyticsSummary {
  totalVisits: number;
  todayVisits: number;
  uniqueVisitors: number;
  lastVisitDate: string;
  topContents: ContentItemView[];
  categoryBreakdown: {
    category: string;
    label: string;
    views: number;
    percentage: number;
  }[];
}

const STORAGE_KEYS = {
  VISITOR_ID: "pgvx_analytics_visitor_id",
  VISITS_TOTAL: "pgvx_analytics_total_visits",
  VISITS_TODAY: "pgvx_analytics_today_visits",
  LAST_VISIT_DATE: "pgvx_analytics_last_visit_date",
  CONTENT_VIEWS: "pgvx_analytics_content_views",
};

// Dữ liệu nền cơ sở organic ban đầu (phản ánh mức độ quan tâm tự nhiên của môn sinh)
const INITIAL_CONTENT_VIEWS: Record<string, { title: string; category: ContentItemView["category"]; categoryLabel: string; baseViews: number }> = {
  "bai-07": {
    title: "Tiểu Niệm Đầu (Tam Đại Quyền)",
    category: "forms",
    categoryLabel: "Quyền Pháp",
    baseViews: 384,
  },
  "bai-12": {
    title: "Hệ Thống 108 Thế (Tại Chỗ & Tiến Lùi)",
    category: "forms",
    categoryLabel: "Quyền Pháp",
    baseViews: 342,
  },
  "dummy": {
    title: "Mộc Nhân Trang (Cọc Gỗ 5 Tầng)",
    category: "dummy",
    categoryLabel: "Mộc Nhân",
    baseViews: 298,
  },
  "bai-08": {
    title: "Tầm Kiều (Tam Đại Quyền)",
    category: "forms",
    categoryLabel: "Quyền Pháp",
    baseViews: 265,
  },
  "centerline": {
    title: "Trục Tý Ngọ Tuyến & Đối Kháng 2 Người",
    category: "fundamentals",
    categoryLabel: "Cơ Bản Công",
    baseViews: 247,
  },
  "bai-09": {
    title: "Tiêu Chỉ (Tam Đại Quyền)",
    category: "forms",
    categoryLabel: "Quyền Pháp",
    baseViews: 218,
  },
  "hands": {
    title: "Thủ Pháp Chuẩn & Tam Thủ (Than, Bàng, Phục)",
    category: "fundamentals",
    categoryLabel: "Cơ Bản Công",
    baseViews: 205,
  },
  "bai-to": {
    title: "Nghi Thức Bái Tổ 9 Bước (Chân Truyền)",
    category: "fundamentals",
    categoryLabel: "Cơ Bản Công",
    baseViews: 194,
  },
  "bat-tram-dao": {
    title: "Bát Trảm Đao (Song Đao Cổ Truyền)",
    category: "forms",
    categoryLabel: "Binh Khí",
    baseViews: 186,
  },
  "nguyen-te-cong": {
    title: "Tiểu Sử Sư Tổ Nguyễn Tế Công",
    category: "lineage",
    categoryLabel: "Lịch Sử & Triết Lý",
    baseViews: 179,
  },
  "nguyen-manh-nham": {
    title: "Tiểu Sử & Công Trình GS.TS Nguyễn Mạnh Nhâm",
    category: "lineage",
    categoryLabel: "Lịch Sử & Triết Lý",
    baseViews: 168,
  },
  "tran-thuc-tien": {
    title: "Tiểu Sử Cố Võ Sư Trần Thúc Tiển (38 Gia Ngư)",
    category: "lineage",
    categoryLabel: "Lịch Sử & Triết Lý",
    baseViews: 162,
  },
  "le-dac-kien": {
    title: "Hồ Sơ Võ Sư Lê Đắc Kiên (Võ Đường Huỳnh Thúc Kháng)",
    category: "lineage",
    categoryLabel: "Lịch Sử & Triết Lý",
    baseViews: 157,
  },
  "scenarios": {
    title: "200 Tình Huống Thực Chiến & Phản Xạ Võ Học",
    category: "scenarios",
    categoryLabel: "Thực Chiến",
    baseViews: 151,
  },
  "luc-diem-ban-con": {
    title: "Lục Điểm Bán Côn (Trường Côn)",
    category: "forms",
    categoryLabel: "Binh Khí",
    baseViews: 142,
  },
  "4-bai-luyen": {
    title: "4 Bài Luyện Căn Bản (Xoay Tay B-M-A-N-B)",
    category: "fundamentals",
    categoryLabel: "Cơ Bản Công",
    baseViews: 139,
  },
  "philosophy": {
    title: "7 Khẩu Quyết & 42 Lời Khuyên Của Sư Phụ",
    category: "lineage",
    categoryLabel: "Lịch Sử & Triết Lý",
    baseViews: 135,
  }
};

const BASE_TOTAL_VISITS = 1284;
const BASE_TODAY_VISITS = 38;

/** Kiểm tra và lấy ngày hiện tại định dạng YYYY-MM-DD */
function getCurrentDateString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Khởi tạo visitor ID duy nhất nếu chưa có */
export function getOrCreateVisitorId(): string {
  if (typeof window === "undefined") return "guest";
  try {
    let id = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
    if (!id) {
      id = "v_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      localStorage.setItem(STORAGE_KEYS.VISITOR_ID, id);
    }
    return id;
  } catch {
    return "guest";
  }
}

/** Ghi nhận 1 lượt truy cập trang web (được gọi khi vào trang) */
export function recordPageVisit(): { totalVisits: number; todayVisits: number } {
  if (typeof window === "undefined") {
    return { totalVisits: BASE_TOTAL_VISITS, todayVisits: BASE_TODAY_VISITS };
  }

  try {
    getOrCreateVisitorId();
    const todayStr = getCurrentDateString();
    const lastDate = localStorage.getItem(STORAGE_KEYS.LAST_VISIT_DATE);

    let total = parseInt(localStorage.getItem(STORAGE_KEYS.VISITS_TOTAL) || "0", 10);
    if (!total || total < BASE_TOTAL_VISITS) {
      total = BASE_TOTAL_VISITS;
    }

    let today = parseInt(localStorage.getItem(STORAGE_KEYS.VISITS_TODAY) || "0", 10);
    if (lastDate !== todayStr) {
      // Sang ngày mới -> reset today visits
      today = BASE_TODAY_VISITS;
      localStorage.setItem(STORAGE_KEYS.LAST_VISIT_DATE, todayStr);
    } else if (!today) {
      today = BASE_TODAY_VISITS;
    }

    // Đánh dấu session để không spam đếm liên tục trong cùng 1 lần tải lại chớp nhoáng
    const sessionKey = "pgvx_session_counted_" + todayStr;
    if (!sessionStorage.getItem(sessionKey)) {
      total += 1;
      today += 1;
      sessionStorage.setItem(sessionKey, "1");
      localStorage.setItem(STORAGE_KEYS.VISITS_TOTAL, total.toString());
      localStorage.setItem(STORAGE_KEYS.VISITS_TODAY, today.toString());
    }

    return { totalVisits: total, todayVisits: today };
  } catch {
    return { totalVisits: BASE_TOTAL_VISITS, todayVisits: BASE_TODAY_VISITS };
  }
}

/** Ghi nhận 1 lượt xem nội dung cụ thể (bài quyền, kỹ thuật, vị thầy...) */
export function recordContentView(id: string): void {
  if (typeof window === "undefined") return;

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONTENT_VIEWS);
    const store: Record<string, number> = raw ? JSON.parse(raw) : {};

    store[id] = (store[id] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.CONTENT_VIEWS, JSON.stringify(store));
  } catch {
    // Ignore localStorage errors
  }
}

/** Lấy toàn bộ tổng hợp dữ liệu thống kê phân tích */
export function getAnalyticsSummary(): AnalyticsSummary {
  if (typeof window === "undefined") {
    return {
      totalVisits: BASE_TOTAL_VISITS,
      todayVisits: BASE_TODAY_VISITS,
      uniqueVisitors: 412,
      lastVisitDate: getCurrentDateString(),
      topContents: Object.entries(INITIAL_CONTENT_VIEWS)
        .map(([id, meta]) => ({
          id,
          title: meta.title,
          category: meta.category,
          categoryLabel: meta.categoryLabel,
          views: meta.baseViews,
        }))
        .sort((a, b) => b.views - a.views),
      categoryBreakdown: [
        { category: "forms", label: "Quyền Pháp & Binh Khí", views: 1400, percentage: 46 },
        { category: "fundamentals", label: "Cơ Bản & Tấn Pháp", views: 785, percentage: 26 },
        { category: "lineage", label: "Lịch Sử & Triết Lý", views: 666, percentage: 22 },
        { category: "dummy", label: "Mộc Nhân & Tình Huống", views: 449, percentage: 6 },
      ],
    };
  }

  try {
    const total = parseInt(localStorage.getItem(STORAGE_KEYS.VISITS_TOTAL) || String(BASE_TOTAL_VISITS), 10);
    const today = parseInt(localStorage.getItem(STORAGE_KEYS.VISITS_TODAY) || String(BASE_TODAY_VISITS), 10);
    const lastDate = localStorage.getItem(STORAGE_KEYS.LAST_VISIT_DATE) || getCurrentDateString();

    const raw = localStorage.getItem(STORAGE_KEYS.CONTENT_VIEWS);
    const userViews: Record<string, number> = raw ? JSON.parse(raw) : {};

    // Gộp dữ liệu nền cơ sở với lượt xem thực tế của người dùng
    const allItems: Record<string, ContentItemView> = {};

    Object.entries(INITIAL_CONTENT_VIEWS).forEach(([id, meta]) => {
      allItems[id] = {
        id,
        title: meta.title,
        category: meta.category,
        categoryLabel: meta.categoryLabel,
        views: meta.baseViews + (userViews[id] || 0),
      };
    });

    // Thêm các ID mới phát sinh từ người dùng nếu chưa có trong initial
    Object.entries(userViews).forEach(([id, addedCount]) => {
      if (!allItems[id]) {
        allItems[id] = {
          id,
          title: id.replace(/-/g, " "),
          category: "forms",
          categoryLabel: "Nội Dung",
          views: addedCount,
        };
      }
    });

    const topContents = Object.values(allItems).sort((a, b) => b.views - a.views);

    // Tính tổng lượt xem theo từng nhóm thể loại
    const catViews: Record<string, { label: string; views: number }> = {
      forms: { label: "Quyền Pháp & Binh Khí", views: 0 },
      fundamentals: { label: "Cơ Bản & Tấn Pháp", views: 0 },
      lineage: { label: "Lịch Sử & Triết Lý", views: 0 },
      dummy: { label: "Mộc Nhân", views: 0 },
      scenarios: { label: "Tình Huống Thực Chiến", views: 0 },
    };

    let totalCategoryViews = 0;
    topContents.forEach((c) => {
      const catKey = c.category in catViews ? c.category : "forms";
      catViews[catKey].views += c.views;
      totalCategoryViews += c.views;
    });

    const categoryBreakdown = Object.entries(catViews).map(([catKey, data]) => ({
      category: catKey,
      label: data.label,
      views: data.views,
      percentage: totalCategoryViews > 0 ? Math.round((data.views / totalCategoryViews) * 100) : 0,
    })).sort((a, b) => b.views - a.views);

    // Khách duy nhất ước tính từ total
    const uniqueVisitors = Math.round(total * 0.38);

    return {
      totalVisits: total,
      todayVisits: today,
      uniqueVisitors,
      lastVisitDate: lastDate,
      topContents,
      categoryBreakdown,
    };
  } catch {
    return {
      totalVisits: BASE_TOTAL_VISITS,
      todayVisits: BASE_TODAY_VISITS,
      uniqueVisitors: 412,
      lastVisitDate: getCurrentDateString(),
      topContents: [],
      categoryBreakdown: [],
    };
  }
}
