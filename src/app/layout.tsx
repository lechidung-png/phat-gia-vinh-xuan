import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";

// 1. Phông chữ Sans-serif tối ưu đặc thù cho tiếng Việt (Typography Việt Nam)
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

// 2. Phông chữ Serif kinh điển uy nghiêm cho tiêu đề võ học, khẩu quyết & tên chiêu thức
const notoSerif = Noto_Serif({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#140C08",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://phat-gia-vinh-xuan.pages.dev"),
  title: {
    default: "Phật Gia Vịnh Xuân — Di Sản Võ Học & Tàng Thư Trực Quan",
    template: "%s | Phật Gia Vịnh Xuân",
  },
  description:
    "Nền tảng số hóa di sản võ học Phật Gia Vịnh Xuân: Tra cứu trọn vẹn 108 chiêu thức liên hoàn, Cọc gỗ Mộc Nhân 3D, Thiền & Khí công dưỡng sinh thở 4 thì, Trục Tý Ngọ Tuyến và tư liệu truyền thừa từ PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức.",
  keywords: [
    "Phật Gia Vịnh Xuân",
    "Vịnh Xuân Quyền",
    "Vịnh Xuân Việt Nam",
    "108 thế võ Vịnh Xuân",
    "Tiểu Niệm Đầu",
    "Tầm Kiều",
    "Tiêu Chỉ",
    "Mộc Nhân Thung",
    "Thiền khí công",
    "Thở 4 thì",
    "Khí công dưỡng sinh",
    "Nguyễn Tế Công",
    "Trần Thúc Tiển",
    "Nguyễn Mạnh Nhâm",
    "Kiềm Dương Tấn",
    "Bàng Thủ",
    "Tý Ngọ Tuyến",
    "Võ đạo Phật Gia",
    "Dưỡng sinh trị liệu",
    "Võ đường Huỳnh Thúc Kháng",
  ],
  authors: [
    { name: "PGS.TS Nguyễn Mạnh Nhâm" },
    { name: "ThS.DS Nguyễn Duy Thức" },
  ],
  creator: "Võ Đường Phật Gia Vịnh Xuân",
  publisher: "Phật Gia Vịnh Xuân",
  category: "Martial Arts & Health",
  alternates: {
    canonical: "https://phat-gia-vinh-xuan.pages.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google4051fa9c42ac17ab",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Phật Gia Vịnh Xuân — Di Sản Võ Học & Tàng Thư Trực Quan",
    description:
      "Tàng thư số hóa võ học Phật Gia Vịnh Xuân: 108 chiêu thức, Cọc gỗ Mộc Nhân 3D, Thiền khí công dưỡng sinh và cây truyền thừa lịch sử Sư Tổ Nguyễn Tế Công.",
    url: "https://phat-gia-vinh-xuan.pages.dev",
    siteName: "Phật Gia Vịnh Xuân",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ấn Vuông Phật Gia Vịnh Xuân — Di Sản Võ Học Kinh Điển",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phật Gia Vịnh Xuân — Di Sản Võ Học & Tàng Thư Trực Quan",
    description:
      "Tàng thư số hóa võ học Phật Gia Vịnh Xuân: 108 chiêu thức, Cọc gỗ Mộc Nhân 3D, Thiền khí công dưỡng sinh và cây truyền thừa lịch sử.",
    images: ["/twitter-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://phat-gia-vinh-xuan.pages.dev/#website",
      "url": "https://phat-gia-vinh-xuan.pages.dev",
      "name": "Phật Gia Vịnh Xuân",
      "alternateName": "Võ Đường Phật Gia Vịnh Xuân Quyền",
      "description":
        "Nền tảng số hóa di sản võ học Phật Gia Vịnh Xuân: Tra cứu trọn vẹn 108 chiêu thức liên hoàn, Cọc gỗ Mộc Nhân 3D, Thiền khí công dưỡng sinh thở 4 thì và tư liệu truyền thừa Sư Tổ Nguyễn Tế Công.",
      "inLanguage": "vi-VN",
      "publisher": {
        "@id": "https://phat-gia-vinh-xuan.pages.dev/#organization",
      },
    },
    {
      "@type": "SportsActivityLocation",
      "@id": "https://phat-gia-vinh-xuan.pages.dev/#organization",
      "name": "Võ Đường Phật Gia Vịnh Xuân",
      "alternateName": [
        "Phật Gia Vịnh Xuân Quyền",
        "Võ Đường Huỳnh Thúc Kháng",
        "Phật Gia Vịnh Xuân Việt Nam",
      ],
      "url": "https://phat-gia-vinh-xuan.pages.dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://phat-gia-vinh-xuan.pages.dev/assets/images/logo/an_vuong_phat_gia_vinh_xuan.png",
        "width": 512,
        "height": 512,
        "caption": "Ấn Vuông Phật Gia Vịnh Xuân",
      },
      "image": "https://phat-gia-vinh-xuan.pages.dev/opengraph-image.png",
      "description":
        "Không gian nghiên cứu, số hóa và lưu giữ di sản võ học Phật Gia Vịnh Xuân truyền thụ từ Cụ Trần Thúc Tiển và Sư Tổ Nguyễn Tế Công.",
      "sport": "Võ thuật Vịnh Xuân (Wing Chun)",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hà Nội",
        "addressCountry": "VN",
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Sư Tổ Nguyễn Tế Công",
          "jobTitle": "Sư Tổ Vịnh Xuân Quyền Việt Nam",
          "description":
            "Đại tông sư mang dòng võ học Vịnh Xuân từ Phật Sơn sang Việt Nam, đặt nền móng cho các thế hệ võ sư Hà Nội.",
        },
      ],
      "member": [
        {
          "@type": "Person",
          "name": "Cụ Trần Thúc Tiển",
          "jobTitle": "Đại đệ tử Sư Tổ Nguyễn Tế Công",
          "description":
            "Võ sư tài danh, người trực tiếp truyền thụ dòng võ học Phật Gia Vịnh Xuân.",
        },
        {
          "@type": "Person",
          "name": "PGS.TS Nguyễn Mạnh Nhâm",
          "jobTitle": "Đồng tác giả & Cố vấn Y võ",
          "description":
            "Chủ tịch Hội Hậu môn Trực tràng Việt Nam, nguyên Trưởng khoa Ngoại Bệnh viện Việt Đức, đệ tử Cụ Trần Thúc Tiển.",
        },
        {
          "@type": "Person",
          "name": "ThS.DS Nguyễn Duy Thức",
          "jobTitle": "Đồng tác giả giáo trình Phật Gia Vịnh Xuân",
          "description":
            "Nhà nghiên cứu võ học và dược học, đệ tử Cụ Trần Thúc Tiển.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://phat-gia-vinh-xuan.pages.dev/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Trang chủ",
          "item": "https://phat-gia-vinh-xuan.pages.dev",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "18 Bài Quyền & 108 Chiêu Thức",
          "item": "https://phat-gia-vinh-xuan.pages.dev/?tab=forms",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Thiền & Khí Công Dưỡng Sinh",
          "item": "https://phat-gia-vinh-xuan.pages.dev/?tab=meditation",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Mộc Nhân Thung Trực Quan",
          "item": "https://phat-gia-vinh-xuan.pages.dev/?tab=dummy",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Thủ & Cước Pháp Căn Bản",
          "item": "https://phat-gia-vinh-xuan.pages.dev/?tab=fundamentals",
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Lịch Sử Truyền Thừa Sư Tổ",
          "item": "https://phat-gia-vinh-xuan.pages.dev/?tab=lineage",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://phat-gia-vinh-xuan.pages.dev/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Phật Gia Vịnh Xuân là gì và có điểm gì đặc trưng?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Phật Gia Vịnh Xuân là dòng võ học Vịnh Xuân Quyền truyền thừa từ Sư Tổ Nguyễn Tế Công qua Cụ Trần Thúc Tiển tại Hà Nội. Dòng võ đặc trưng bởi nguyên lý nhu cương tương tế, công thủ đồng thời trên trục Tý Ngọ Tuyến, thế tấn Kiềm Dương vững chãi, và sự kết hợp sâu sắc giữa võ thuật thực chiến với y học dưỡng sinh bảo vệ sức khỏe thân tâm.",
          },
        },
        {
          "@type": "Question",
          "name": "Hệ thống 108 chiêu thức Phật Gia Vịnh Xuân gồm những gì?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Hệ thống 108 chiêu thức gồm 108 đòn thế liên hoàn chia thành 5 phân đoạn: Khai thế & Thủ pháp cơ bản, Đòn thế chuyển tiếp, Biến hóa linh hoạt, Công thủ liên hoàn và Hồi thế bái tổ. Hệ thống được luyện tập toàn diện qua các hình thức: Tại chỗ đơn luyện, Đối luyện hai người, Tiến lùi di chuyển và thực hành trên Cọc gỗ Mộc Nhân Thung.",
          },
        },
        {
          "@type": "Question",
          "name": "Phương pháp Thiền và Khí công trong Phật Gia Vịnh Xuân được thực hành như thế nào?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Thiền và Khí công Phật Gia Vịnh Xuân kết hợp phép thở 4 thì (Hít vào - Nín thở giữ hơi - Thở ra êm nhẹ - Nín thở thư giãn) cùng kỹ thuật quán chiếu nội tâm và tụ khí Đan Điền. Phương pháp giúp điều hòa hệ thần kinh thực vật, tối ưu dung tích phổi, giảm căng thẳng và bồi đắp nội lực bền bỉ cho người tập võ.",
          },
        },
        {
          "@type": "Question",
          "name": "Cọc gỗ Mộc Nhân Thung có vai trò gì trong quá trình luyện tập?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Mộc Nhân Thung mô phỏng đối thủ thực tế với 3 tay và 1 chân ở các góc độ sinh cơ học chuẩn xác. Luyện Mộc Nhân giúp võ sinh làm quen với lực phản hồi cứng chắc, mài giũa xương cẳng tay, rèn luyện chuyển bộ luồn lách né tránh và triển khai các đòn đánh vào góc mù của đối phương.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`dark h-full antialiased ${beVietnamPro.variable} ${notoSerif.variable}`}
    >
      <head>
        <meta name="google-site-verification" content="google4051fa9c42ac17ab" />
        <meta name="google-site-verification" content="4051fa9c42ac17ab" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#140C08] text-[#FBF8F3] font-sans selection:bg-[#E2B743]/30 selection:text-[#FDF3D6]"
      >
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
