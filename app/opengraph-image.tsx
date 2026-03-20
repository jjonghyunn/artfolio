import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "jjonghyunn — 드로잉 · 유화 · 크로키";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0c10",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        {/* decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #0ED4A3 0%, transparent 70%)",
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "40px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #1865F2 0%, transparent 70%)",
            opacity: 0.1,
          }}
        />

        {/* top line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#0ED4A3",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "4px",
              color: "#6b7280",
              textTransform: "uppercase",
            }}
          >
            드로잉 · 유화 · 크로키
          </span>
        </div>

        {/* name */}
        <div
          style={{
            fontSize: "96px",
            fontWeight: 300,
            letterSpacing: "-4px",
            color: "#e8eaf0",
            lineHeight: 1,
            marginBottom: "32px",
          }}
        >
          jjonghyunn
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#6b7280",
            fontWeight: 300,
            letterSpacing: "0px",
          }}
        >
          월급쟁이의 그림 — 캔버스 위에 남기는 순간들
        </div>

        {/* bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "linear-gradient(90deg, #0ED4A3, #1865F2, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
