"use client";

import Image from "next/image";
import type { InstagramMedia } from "@/lib/instagram";

const AVATAR = "https://avatars.githubusercontent.com/u/208093681?v=4";

export default function Hero({ peekItems }: { peekItems: InstagramMedia[] }) {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e8eaf0 1px, transparent 1px), linear-gradient(90deg, #e8eaf0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[140px] bg-[#0ED4A3] pointer-events-none" />

      {/* main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-5xl mx-auto w-full px-6 pt-20">
        <div className="flex flex-col gap-8 max-w-2xl">

          {/* badge */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ED4A3]" />
            <span className="text-xs text-[#6b7280] tracking-widest uppercase">
              드로잉 · 유화 · 크로키
            </span>
          </div>

          {/* avatar + name row — PTFLO 스타일 */}
          <div className="flex items-center gap-4">
            <Image
              src={AVATAR}
              alt="jjonghyunn"
              width={72}
              height={72}
              className="rounded-full border border-[#1e2130] flex-shrink-0"
              unoptimized
            />
            <div>
              <h1
                style={{
                  fontSize: "clamp(28px, 5vw, 56px)",
                  fontWeight: 300,
                  letterSpacing: "-1.5px",
                  lineHeight: 1.08,
                  color: "#e8eaf0",
                  marginBottom: "4px",
                }}
              >
                jjonghyunn
              </h1>
              <p style={{ fontSize: "15px", fontWeight: 300, color: "#6b7280" }}>
                박종현
              </p>
            </div>
          </div>

          {/* description */}
          <p className="text-[#6b7280] text-sm leading-relaxed max-w-md">
            월급쟁이의 그림 — 유화, 드로잉, 크로키로 일상의 순간들을 캔버스에 담습니다.
            그림 주문도 받고 있습니다.
          </p>

          {/* cta */}
          <div className="flex gap-3">
            <a
              href="#gallery"
              className="px-5 py-2.5 rounded-lg bg-[#e8eaf0] text-[#0a0c10] text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              작품감상
            </a>
            <a
              href="#commission"
              className="px-5 py-2.5 rounded-lg border border-[#1e2130] text-[#6b7280] text-sm hover:text-[#e8eaf0] hover:border-[#6b7280] transition-colors"
            >
              그림 주문 →
            </a>
          </div>
        </div>
      </div>

      {/* peek strip */}
      {peekItems.length > 0 && (
        <div className="relative z-10 mt-auto">
          <div className="flex items-end justify-center gap-2 px-6 overflow-hidden h-44">
            {peekItems.slice(0, 5).map((item, i) => {
              const src =
                item.media_type === "VIDEO"
                  ? item.thumbnail_url ?? item.media_url
                  : item.media_url;
              return (
                <a
                  key={item.id}
                  href="#gallery"
                  className="flex-shrink-0 w-28 sm:w-36 rounded-t-xl overflow-hidden border border-[#1e2130] transition-opacity hover:opacity-90"
                  style={{
                    opacity: 0.55,
                    transform: `translateY(${i % 2 === 0 ? "24px" : "12px"})`,
                  }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={160}
                    height={160}
                    className="w-full h-36 object-cover"
                    unoptimized
                  />
                </a>
              );
            })}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/30 to-transparent pointer-events-none" />
          <p className="relative text-center py-4 text-xs text-[#6b7280] tracking-widest">
            scroll to explore
          </p>
        </div>
      )}
    </section>
  );
}
