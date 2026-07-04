import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(155deg, #000000 0%, #0a1a33 55%, #0a84ff 130%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            letterSpacing: 1,
            color: "#0a84ff",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#0a84ff",
              display: "flex",
            }}
          />
          PLUTUS ANDROMEDA GROUP
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 26,
            color: "#86868b",
          }}
        >
          Digital Design &amp; Engineering — South Africa
        </div>
      </div>
    ),
    { ...size }
  );
}
