import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import "./globals.css";

// 1. Phông chữ Sans-serif tối ưu đặc thù cho tiếng Việt (Thiết kế bởi các chuyên gia Typography Việt Nam)
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
  title: "Phật Gia Vịnh Xuân — Kho Di Sản Võ Học Kinh Điển",
  description:
    "Nền tảng số hóa di sản võ học Phật Gia Vịnh Xuân: Tra cứu trọn vẹn 108 chiêu thức liên hoàn, Cọc gỗ Mộc Nhân, Trục Tý Ngọ Tuyến và các chuyên đề kinh điển từ giáo trình chính thống của GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức.",
  keywords: [
    "Phật Gia Vịnh Xuân",
    "Vịnh Xuân Quyền",
    "108 thế võ",
    "Nguyễn Tế Công",
    "Trần Thúc Tiển",
    "Nguyễn Mạnh Nhâm",
    "Mộc Nhân",
    "Kiềm Dương Tấn",
    "Bàng Thủ",
    "Tý Ngọ Tuyến",
  ],
  authors: [{ name: "GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức" }],
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
    title: "Phật Gia Vịnh Xuân — Kho Di Sản Võ Học Kinh Điển",
    description:
      "Không gian số hóa 100% tài liệu võ học kinh điển: 7 Bài quyền chính tông, Cọc gỗ Mộc Nhân, Trục Tý Ngọ Tuyến và 108 thế võ chân truyền.",
    url: "https://phat-gia-vinh-xuan.pages.dev",
    siteName: "Phật Gia Vịnh Xuân",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Phật Gia Vịnh Xuân — Kho Di Sản Võ Học Kinh Điển",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phật Gia Vịnh Xuân — Kho Di Sản Võ Học Kinh Điển",
    description:
      "Không gian số hóa 100% tài liệu võ học kinh điển: 7 Bài quyền chính tông, Cọc gỗ Mộc Nhân, Trục Tý Ngọ Tuyến và 108 thế võ chân truyền.",
    images: ["/og-image.png"],
  },
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
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#140C08] text-[#FBF8F3] font-sans selection:bg-[#E2B743]/30 selection:text-[#FDF3D6]"
      >
        {children}
      </body>
    </html>
  );
}
