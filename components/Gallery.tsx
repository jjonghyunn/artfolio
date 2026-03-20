"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import type { InstagramMedia } from "@/lib/instagram";

type Filter = "ALL" | "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

const FILTER_LABELS: Record<Filter, string> = {
  ALL: "전체",
  IMAGE: "사진",
  VIDEO: "영상",
  CAROUSEL_ALBUM: "앨범",
};

function getDisplayUrl(item: InstagramMedia): string {
  if (item.media_type === "VIDEO") return item.thumbnail_url ?? item.media_url;
  if (item.media_type === "CAROUSEL_ALBUM") {
    return item.children?.data[0]?.media_url ?? item.media_url;
  }
  return item.media_url;
}

export default function Gallery({ items }: { items: InstagramMedia[] }) {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selected, setSelected] = useState<InstagramMedia | null>(null);

  const filtered =
    filter === "ALL" ? items : items.filter((i) => i.media_type === filter);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  return (
    <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#e8eaf0] mb-10">Works</h2>

      {/* filter tabs */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {(Object.keys(FILTER_LABELS) as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              filter === f
                ? "bg-[#0ED4A3] text-[#0a0c10] font-medium"
                : "border border-[#1e2130] text-[#6b7280] hover:text-[#e8eaf0] hover:border-[#6b7280]"
            }`}
          >
            {FILTER_LABELS[f]}
          </button>
        ))}
      </div>

      {/* grid */}
      {filtered.length === 0 ? (
        <p className="text-[#6b7280] text-sm">게시물이 없습니다.</p>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item) => {
            const thumb = getDisplayUrl(item);
            return (
              <div
                key={item.id}
                className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl bg-[#111318]"
                onClick={() => setSelected(item)}
              >
                <div className="relative w-full">
                  <Image
                    src={thumb}
                    alt={item.caption?.slice(0, 60) ?? ""}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    unoptimized
                  />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                    <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {item.media_type === "VIDEO" && (
                        <span className="text-xs px-2 py-0.5 rounded bg-[#1865F2] text-white mr-2">
                          영상
                        </span>
                      )}
                      {item.media_type === "CAROUSEL_ALBUM" && (
                        <span className="text-xs px-2 py-0.5 rounded bg-[#F2A818] text-[#0a0c10] mr-2">
                          앨범
                        </span>
                      )}
                      {item.caption && (
                        <p className="text-white text-sm line-clamp-2">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl leading-none"
            onClick={close}
          >
            ×
          </button>
          <div
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selected.media_type === "VIDEO" ? (
              <video
                src={selected.media_url}
                controls
                autoPlay
                className="w-full max-h-[75vh] rounded-xl object-contain bg-black"
              />
            ) : (
              <Image
                src={getDisplayUrl(selected)}
                alt={selected.caption?.slice(0, 60) ?? ""}
                width={1200}
                height={1200}
                className="w-full max-h-[75vh] rounded-xl object-contain"
                unoptimized
              />
            )}
            {selected.caption && (
              <p className="text-[#e8eaf0] text-sm leading-relaxed line-clamp-4">
                {selected.caption}
              </p>
            )}
            <a
              href={selected.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6b7280] hover:text-[#0ED4A3] transition-colors self-start"
            >
              Instagram에서 보기 →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
