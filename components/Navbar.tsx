"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c10]/90 backdrop-blur-md border-b border-[#1e2130]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-[#e8eaf0] text-sm font-light tracking-widest">
          jjonghyunn
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#gallery"
            className="text-[#6b7280] hover:text-[#e8eaf0] text-sm transition-colors"
          >
            작품감상
          </a>
          <a
            href="#commission"
            className="text-[#6b7280] hover:text-[#e8eaf0] text-sm transition-colors"
          >
            그림 주문
          </a>
          <a
            href="https://instagram.com/jjonghyunn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full border border-[#1e2130] text-[#6b7280] hover:text-[#0ED4A3] hover:border-[#0ED4A3] text-sm transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </nav>
  );
}
