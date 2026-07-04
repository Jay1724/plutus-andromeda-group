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
          background: "linear-gradient(155deg, #08080a 0%, #17131f 55%, #241a10 100%)",
          color: "#f4f2ec",
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
            color: "#d4af6a",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#d4af6a",
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
            color: "#9a988f",
          }}
        >
          Digital Design &amp; Engineering — South Africa
        </div>
      </div>
    ),
    { ...size }
  );
}
