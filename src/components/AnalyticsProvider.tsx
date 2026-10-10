"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { GA_TRACKING_ID, CF_ANALYTICS_TOKEN, trackPageView } from "@/lib/analytics";

/**
 * Component tích hợp các công cụ phân tích truy cập chuyên nghiệp:
 * 1. Google Analytics 4 (GA4)
 * 2. Cloudflare Web Analytics
 */
export const AnalyticsProvider: React.FC = () => {
  // Lắng nghe thay đổi đường dẫn URL / hash để kích hoạt pageview cho web tĩnh (SPA)
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const handleLocationChange = () => {
      trackPageView(window.location.href, document.title);
    };

    // Theo dõi lần đầu khi nạp component
    handleLocationChange();

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <>
      {/* 1. GOOGLE ANALYTICS 4 (GA4) SCRIPT */}
      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                  transport_type: 'beacon'
                });
              `,
            }}
          />
        </>
      )}

      {/* 2. CLOUDFLARE WEB ANALYTICS SCRIPT (BẢO MẬT & KHÔNG DÙNG COOKIE) */}
      {CF_ANALYTICS_TOKEN && (
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
        />
      )}
    </>
  );
};
