import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "jjonghyunn — Drawing · Oil Painting · Croquis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px", height: "630px",
          background: "#0f0a08",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
          fontFamily: "serif",
        }}
      >
        {/* warm orange glow — top right */}
        <div style={{
          position: "absolute", top: "-160px", right: "-100px",
          width: "580px", height: "580px", borderRadius: "50%",
          background: "radial-gradient(circle, #F59E0B 0%, transparent 65%)",
          opacity: 0.16,
        }} />

        {/* purple glow — bottom left */}
        <div style={{
          position: "absolute", bottom: "-120px", left: "-80px",
          width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, #A064F0 0%, transparent 65%)",
          opacity: 0.18,
        }} />

        {/* soft center warmth */}
        <div style={{
          position: "absolute", top: "35%", right: "28%",
          width: "220px", height: "220px", borderRadius: "50%",
          background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)",
          opacity: 0.05,
        }} />

        {/* label */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "44px" }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#F59E0B", opacity: 0.8 }} />
          <span style={{ fontSize: "13px", letterSpacing: "4px", color: "#6b5a4e", textTransform: "uppercase" }}>
            Drawing · Oil Painting · Croquis
          </span>
        </div>

        {/* name */}
        <div style={{
          fontSize: "100px", fontWeight: 300, letterSpacing: "-4px",
          color: "#e8ddd5", lineHeight: 0.95, marginBottom: "36px",
        }}>
          jjonghyunn
        </div>

        {/* tagline */}
        <div style={{ fontSize: "20px", color: "#6b5a4e", fontWeight: 300, letterSpacing: "0.5px" }}>
          Art by a salaryman — moments on canvas
        </div>

        {/* bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
          background: "linear-gradient(90deg, #F59E0B, #A064F0, transparent)",
        }} />
      </div>
    ),
    { ...size }
  );
}
