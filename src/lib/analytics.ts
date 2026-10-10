// ==============================================================================
// HỆ THỐNG PHÂN TÍCH & ĐO LƯỜNG CHUYÊN NGHIỆP (PROFESSIONAL ANALYTICS ENGINE)
// Hỗ trợ Google Analytics 4 (GA4) & Cloudflare Web Analytics
// ==============================================================================

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-JGX47YXHD7";
export const CF_ANALYTICS_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || "";

// Khai báo kiểu TypeScript toàn cục cho window.gtag
declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetIdOrEventName: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Ghi nhận một lượt xem trang (Page View) lên Google Analytics
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === "undefined" || !window.gtag) return;
  try {
    window.gtag("event", "page_view", {
      page_location: url,
      page_title: title || document.title,
      page_path: window.location.pathname + window.location.search,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.debug("[Analytics] Page view tracking error:", error);
    }
  }
}

/**
 * Ghi nhận một sự kiện tương tác võ học (Custom Martial Event)
 */
export function trackMartialEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Event: ${eventName}]`, params);
  }

  if (!window.gtag) return;

  try {
    window.gtag("event", eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.debug(`[Analytics] Event ${eventName} tracking error:`, error);
    }
  }
}

/**
 * Theo dõi môn sinh xem một bài quyền / binh khí cụ thể
 */
export function trackFormView(formId: string, formTitle: string): void {
  trackMartialEvent("view_martial_form", {
    form_id: formId,
    form_title: formTitle,
    content_type: "curriculum_form",
  });
}

/**
 * Theo dõi môn sinh xem hồ sơ tiểu sử vị thầy
 */
export function trackMasterProfileView(masterId: string, masterName: string): void {
  trackMartialEvent("view_master_profile", {
    master_id: masterId,
    master_name: masterName,
    content_type: "lineage_profile",
  });
}

/**
 * Theo dõi tương tác cọc Mộc Nhân
 */
export function trackWoodenDummyInteraction(action: string, level?: number): void {
  trackMartialEvent("interact_wooden_dummy", {
    action,
    level: level || 0,
    content_type: "wooden_dummy",
  });
}

/**
 * Theo dõi môn sinh sử dụng tính năng tìm kiếm (Command Palette)
 */
export function trackSearchQuery(query: string, resultCount: number): void {
  trackMartialEvent("search", {
    search_term: query,
    results_count: resultCount,
  });
}

/**
 * Theo dõi trạng thái bật/tắt Chuông Thiền Đan Điền
 */
export function trackZenAudioToggle(isEnabled: boolean): void {
  trackMartialEvent("toggle_zen_audio", {
    zen_audio_enabled: isEnabled,
  });
}

/**
 * Theo dõi chuyển tab trong hệ thống
 */
export function trackTabChange(tabName: string): void {
  trackMartialEvent("navigate_tab", {
    tab_name: tabName,
  });
}
