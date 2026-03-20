import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jjonghyunn — 드로잉 · 유화 · 크로키",
  description: "박종현의 작품 포트폴리오. 드로잉, 유화, 크로키, 그림주문.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
