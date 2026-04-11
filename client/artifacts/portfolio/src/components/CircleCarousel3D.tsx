import React, { useState, useEffect, useRef, useCallback } from "react";

interface CircleCarousel3DProps {
  items: React.ReactNode[];
  cardWidth?: number;
  cardHeight?: number;
  autoRotateMs?: number;
  radius?: number;
}

export default function CircleCarousel3D({
  items,
  cardWidth = 290,
  cardHeight = 360,
  autoRotateMs = 2800,
  radius,
}: CircleCarousel3DProps) {
  const count = items.length;
  const anglePerCard = 360 / count;
  const r = radius ?? Math.max(260, (cardWidth * 0.92 * count) / (2 * Math.PI));

  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  const advance = useCallback(() => {
    if (!pausedRef.current) setRotation((prev: number) => prev - anglePerCard);
  }, [anglePerCard]);

  useEffect(() => {
    if (autoRotateMs <= 0) return;
    const id = setInterval(advance, autoRotateMs);
    return () => clearInterval(id);
  }, [advance, autoRotateMs]);

  const currentIndex = Math.round(Math.abs(rotation / anglePerCard)) % count;

  function getCardMeta(index: number) {
    const cardAngle = index * anglePerCard;
    const diff = (cardAngle + rotation) % 360;
    const norm = diff > 180 ? diff - 360 : diff < -180 ? diff + 360 : diff;
    const cos = Math.cos((norm * Math.PI) / 180);
    const isFront = Math.abs(norm) < anglePerCard * 0.55;
    return {
      opacity: isFront ? 1 : Math.max(0.3, ((cos + 1) / 2) * 0.8),
      scale: isFront ? 1.08 : Math.max(0.85, (cos + 1) / 2),
      isFront,
    };
  }

  const sideBtn = (dir: 1 | -1, side: "left" | "right") => (
    <button
      onClick={() => { setRotation((prev: number) => prev - dir * anglePerCard); setPaused(false); }}
      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background = "rgba(99,102,241,0.28)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.45)"; }}
      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(99,102,241,0.18)"; }}
      style={{
        position: "absolute",
        [side]: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        background: "rgba(99,102,241,0.08)",
        border: "1px solid rgba(99,102,241,0.4)",
        color: "#a5b4fc",
        fontSize: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        transition: "all 0.2s ease",
        boxShadow: "0 0 16px rgba(99,102,241,0.18)",
        lineHeight: "1",
        paddingBottom: "2px",
      }}
    >
      {dir === -1 ? "‹" : "›"}
    </button>
  );

  const sceneHeight = Math.ceil(cardHeight * 1.15) + 24;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* ── Outer wrapper: side arrows + 3D scene ── */}
      <div style={{ position: "relative", width: "100%" }}>

        {/* Side arrow — LEFT (goes to previous) */}
        {sideBtn(1, "left")}

        {/* Side arrow — RIGHT (goes to next) */}
        {sideBtn(-1, "right")}

        {/* ── 3D scene ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: `${sceneHeight}px`,
            perspective: "1200px",
            perspectiveOrigin: "50% 50%",
            overflow: "visible",
          }}
        >
          {/* Rotating ring */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "44%",
              transformStyle: "preserve-3d",
              transform: `translateX(-50%) translateY(-50%) rotateY(${rotation}deg)`,
              transition: "transform 1.1s cubic-bezier(0.23, 1, 0.32, 1)",
              width: 0,
              height: 0,
            }}
          >
            {items.map((item, i) => {
              const { opacity, scale, isFront } = getCardMeta(i);
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    marginLeft: `-${cardWidth / 2}px`,
                    marginTop: `-${cardHeight / 2}px`,
                    transform: `rotateY(${i * anglePerCard}deg) translateZ(${r}px) scale(${scale})`,
                    opacity,
                    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                    cursor: "pointer",
                    zIndex: isFront ? 10 : 1,
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>

          {/* Pause overlay */}
          {!paused && (
            <div
              style={{ position: "absolute", inset: 0, zIndex: 40, cursor: "pointer" }}
              onClick={() => setPaused(true)}
            />
          )}
        </div>
      </div>

      {/* ── Navigation bar — always BELOW the scene ── */}
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "560px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "0 16px",
        }}
      >
        {/* PREV button */}
        <button
          onClick={() => { setRotation((prev: number) => prev + anglePerCard); setPaused(false); }}
          style={{
            display: "flex", alignItems: "center", gap: "6px",
            padding: "10px 22px",
            borderRadius: "12px",
            border: "1px solid rgba(59,130,246,0.25)",
            background: "rgba(59,130,246,0.06)",
            color: "#60a5fa",
            fontFamily: "'Orbitron', monospace",
            fontSize: "10px", fontWeight: 700,
            letterSpacing: "2px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          ‹ PREV
        </button>

        {/* Pagination dots */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, justifyContent: "center" }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const targetDegree = -(i * anglePerCard);
                let diff = targetDegree - (rotation % 360);
                if (diff > 180) diff -= 360;
                if (diff < -180) diff += 360;
                setRotation(rotation + diff);
                setPaused(false);
              }}
              style={{
                width: i === currentIndex ? "32px" : "7px",
                height: "4px",
                borderRadius: "2px",
                background: i === currentIndex ? "#3b82f6" : "rgba(255,255,255,0.15)",
                transition: "all 0.4s ease",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* NEXT button */}
        <button
          onClick={() => { setRotation((prev: number) => prev - anglePerCard); setPaused(false); }}
          style={{
            display: "flex", alignItems: "center", gap: "6px",
            padding: "10px 22px",
            borderRadius: "12px",
            border: "1px solid rgba(59,130,246,0.25)",
            background: "rgba(59,130,246,0.06)",
            color: "#60a5fa",
            fontFamily: "'Orbitron', monospace",
            fontSize: "10px", fontWeight: 700,
            letterSpacing: "2px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          NEXT ›
        </button>
      </div>
    </div>
  );
}
