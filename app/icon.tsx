import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 8,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="12" stroke="#0a84ff" strokeOpacity="0.5" />
          <ellipse
            cx="13"
            cy="13"
            rx="12"
            ry="4.5"
            stroke="#0a84ff"
            strokeOpacity="0.7"
            transform="rotate(-28 13 13)"
          />
          <circle cx="13" cy="13" r="3.4" fill="#0a84ff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
