"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e8eaf0 1px, transparent 1px), linear-gradient(90deg, #e8eaf0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-[#0ED4A3] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e2130] bg-[#111318] text-sm text-[#6b7280]">
          <span className="w-2 h-2 rounded-full bg-[#0ED4A3] animate-pulse" />
          드로잉 · 유화 · 크로키
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e8eaf0]">
          jjonghyunn
        </h1>

        <p className="text-[#6b7280] text-lg leading-relaxed max-w-md">
          월급쟁이의 그림 — 캔버스 위에 남기는 순간들
        </p>

        <div className="flex gap-3 mt-2">
          <a
            href="https://instagram.com/jjonghyunn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#1865F2] text-white text-sm font-medium hover:bg-[#1557d4] transition-colors"
          >
            Instagram
          </a>
          <a
            href="#commission"
            className="px-5 py-2.5 rounded-lg border border-[#1e2130] text-[#e8eaf0] text-sm font-medium hover:bg-[#111318] transition-colors"
          >
            그림 주문
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b7280] text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#6b7280] to-transparent" />
      </div>
    </section>
  );
}
