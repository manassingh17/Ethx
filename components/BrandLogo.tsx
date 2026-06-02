import { CSSProperties } from "react";

export const LOGO_SRC = "/images/Logo.jpeg";

type BrandLogoProps = {
  size?: number;
  showText?: boolean;
  textColor?: string;
  style?: CSSProperties;
};

export default function BrandLogo({
  size = 34,
  showText = true,
  textColor,
  style,
}: BrandLogoProps) {
  const textSize = size >= 48 ? "18px" : size >= 40 ? "17px" : "16px";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", ...style }}>
      <img
        src={LOGO_SRC}
        alt="Ethical Xchange"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius: "8px",
          objectFit: "contain",
          flexShrink: 0,
        }}
      />
      {showText && (
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: textSize,
            fontWeight: 700,
            color: textColor ?? "var(--text-primary)",
            whiteSpace: "nowrap",
          }}
        >
          Ethical Xchange
        </span>
      )}
    </div>
  );
}
