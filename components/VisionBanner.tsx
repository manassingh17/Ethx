"use client";

import { CSSProperties } from "react";
import EthicalCrystalAnimation from "@/components/EthicalCrystalAnimation";
import { ETHICAL_ANIMATION_BG } from "@/lib/ethicalAnimation";

export default function VisionBanner() {
  const section: CSSProperties = {
    minHeight: "100vh",
    padding: "96px 32px",
    background: "#0b0b0c",
    display: "flex",
    alignItems: "center",
  };

  const frame: CSSProperties = {
    width: "100%",
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    borderRadius: "22px",
    position: "relative",
    overflow: "hidden",
    minHeight: "min(72vh, 520px)",
    border: "1px solid rgba(96, 165, 250, 0.18)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
    background: ETHICAL_ANIMATION_BG,
  };

  const content: CSSProperties = {
    position: "relative",
    zIndex: 3,
    padding: "62px 48px",
    maxWidth: "min(620px, 52%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "min(72vh, 520px)",
  };

  const eyebrow: CSSProperties = {
    fontSize: "12px",
    letterSpacing: "1.2px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "rgba(226, 232, 240, 0.92)",
    marginBottom: "14px",
  };

  const title: CSSProperties = {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(38px, 6vw, 66px)",
    lineHeight: 1.03,
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: "18px",
  };

  const subtitle: CSSProperties = {
    fontSize: "27px",
    lineHeight: 1.2,
    fontWeight: 500,
    color: "rgba(226, 232, 240, 0.92)",
    marginBottom: "30px",
  };

  const description: CSSProperties = {
    fontSize: "18px",
    lineHeight: 1.55,
    color: "rgba(203, 213, 225, 0.95)",
    marginBottom: "34px",
  };

  const button: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 26px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #2563eb, #4f46e5)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 600,
    boxShadow: "0 8px 22px rgba(37, 99, 235, 0.4)",
    transition: "transform 0.2s, box-shadow 0.2s",
    width: "fit-content",
  };

  return (
    <section style={section}>
      <div style={frame} className="vision-banner-frame">
        <EthicalCrystalAnimation fullBleed />

        <div style={content}>
          <p style={eyebrow}>Power your marketplace vision</p>
          <h2 style={title}>Build industry platforms.</h2>
          <p style={subtitle}>Own the future.</p>
          <p style={description}>Launch secure, scalable ecosystems instantly.</p>
          <a
            href="#contact"
            style={button}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 26px rgba(37, 99, 235, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 22px rgba(37, 99, 235, 0.4)";
            }}
          >
            Get started
          </a>
        </div>
      </div>

      <style jsx global>{`
        .vision-banner-frame .ethical-crystal-animation--bleed {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .vision-banner-frame::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            rgba(0, 0, 0, 0.88) 0%,
            rgba(0, 0, 0, 0.72) 38%,
            rgba(0, 0, 0, 0.35) 58%,
            rgba(0, 0, 0, 0.08) 78%,
            transparent 100%
          );
        }

        .ethical-crystal-animation {
          width: 100%;
          height: 100%;
          background: ${ETHICAL_ANIMATION_BG};
          overflow: hidden;
        }

        .ethical-crystal-animation__stage {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .ethical-crystal-animation__canvas {
          display: block;
          max-width: none;
          max-height: none;
        }

        /* Hide baked-in Gemini sparkle watermark (bottom-right of frames) */
        .ethical-crystal-animation--bleed::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: clamp(72px, 12vw, 120px);
          height: clamp(56px, 10vw, 96px);
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            145deg,
            transparent 0%,
            transparent 38%,
            ${ETHICAL_ANIMATION_BG} 39%
          );
          box-shadow: -24px -16px 40px 20px ${ETHICAL_ANIMATION_BG};
        }

        @media (max-width: 900px) {
          .vision-banner-frame {
            min-height: min(88vh, 640px) !important;
          }
          .vision-banner-frame > div:last-child {
            max-width: 100% !important;
            min-height: min(88vh, 640px) !important;
            padding: 48px 28px 40px !important;
          }
          .vision-banner-frame::before {
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgba(0, 0, 0, 0.75) 42%,
              rgba(0, 0, 0, 0.92) 100%
            ) !important;
          }
        }
      `}</style>
    </section>
  );
}
