import { useState } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

export default function ArchitectureDiagram({ src, alt, caption }) {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (!src) return null;

  return (
    <>
      <figure style={{ margin: 0 }}>
        <div
          style={{
            position: "relative",
            backgroundColor: theme.imageDark,
            border: `1px solid ${theme.text}15`,
            borderRadius: 12,
            overflow: "hidden",
            padding: "1.5rem",
            cursor: "zoom-in",
          }}
          onClick={() => setIsOpen(true)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
            }}
          >
            <Image
              src={src}
              alt={alt || "Architecture diagram"}
              fill
              sizes="(max-width: 900px) 100vw, 800px"
              style={{
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
          </div>
        </div>

        {caption && (
          <figcaption
            style={{
              color: theme.secondaryText,
              fontSize: "0.85rem",
              textAlign: "center",
              marginTop: "0.75rem",
              fontFamily: "var(--font-google-sans), sans-serif",
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 45,
              height: 45,
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: "1.2rem",
            }}
          >
            ✕
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "95vw",
              height: "95vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={src}
              alt={alt || "Architecture diagram"}
              width={3000}
              height={2000}
              priority
              unoptimized={false}
              style={{
                width: "1800px",
                maxWidth: "100%",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
