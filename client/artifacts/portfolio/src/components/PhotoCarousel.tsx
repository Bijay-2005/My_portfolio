import { useRef, useEffect } from "react";
import photo1 from "@assets/gallery_1.jpg";
import photo2 from "@assets/gallery_2.jpg";
import photo3 from "@assets/gallery_3.jpg";
import photo4 from "@assets/gallery_4.jpg";
import photo5 from "@assets/gallery_5.jpg";

const galleryItems = [
  { img: photo1, label: "HACKATHON EVENT", border: "#10b981", bg: "rgba(16,185,129,0.12)", tag: "🏅" },
  { img: photo2, label: "TEAM SPIRIT", border: "#eab308", bg: "rgba(234,179,8,0.12)", tag: "🤝" },
  { img: photo3, label: "PRESENTATION", border: "#8b5cf6", bg: "rgba(139,92,246,0.12)", tag: "📢" },
  { img: photo4, label: "MENTORSHIP", border: "#ec4899", bg: "rgba(236,72,153,0.12)", tag: "💡" },
  { img: photo5, label: "DEV SPRINT", border: "#ef4444", bg: "rgba(239,68,68,0.12)", tag: "🔥" },
];

export default function PhotoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const hoveredRef = useRef(false);
  const CARD_W = 260; // Slightly wider for gallery photos
  const GAP = 20;
  const STEP = CARD_W + GAP;
  const totalWidth = galleryItems.length * STEP;

  useEffect(() => {
    const tick = () => {
      if (!hoveredRef.current) {
        posRef.current += 0.6; // Smoother speed
        if (posRef.current >= totalWidth) posRef.current = 0;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [totalWidth]);

  const doubled = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <div
      className="relative overflow-hidden w-full py-10"
      onMouseEnter={() => { hoveredRef.current = true; }}
      onMouseLeave={() => { hoveredRef.current = false; }}
      style={{ 
        maskImage: "linear-gradient(90deg, transparent, black 120px, black calc(100% - 120px), transparent)", 
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 120px, black calc(100% - 120px), transparent)" 
      }}
    >
      <div ref={trackRef} style={{ display: "flex", gap: `${GAP}px`, width: "max-content", transformStyle: "preserve-3d", willChange: "transform" }}>
        {doubled.map((item, idx) => (
          <div key={idx} 
            className="group"
            style={{ 
              width: `${CARD_W}px`, 
              flexShrink: 0, 
              borderRadius: "20px", 
              overflow: "hidden", 
              border: `1px solid ${item.border}30`, 
              background: `linear-gradient(160deg, rgba(10,20,40,0.8), rgba(5,10,20,0.9))`, 
              position: "relative",
              backdropFilter: "blur(12px)",
              transition: "transform 0.4s ease, border-color 0.4s ease",
            }}>
            
            {/* Image Container */}
            <div style={{ position: "relative", overflow: "hidden", height: "180px" }}>
              <img 
                src={item.img} 
                alt={item.label} 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  transition: "transform 0.6s ease" 
                }} 
              />
              {/* Overlay */}
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: `linear-gradient(0deg, rgba(8,14,28,0.8) 0%, transparent 50%)` 
              }} />
              
              {/* Tag */}
              <div style={{ 
                position: "absolute", 
                top: "10px", 
                right: "10px", 
                width: "32px", 
                height: "32px", 
                borderRadius: "10px", 
                background: "rgba(10,20,40,0.8)", 
                border: `1px solid ${item.border}50`, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: "16px",
                backdropFilter: "blur(4px)"
              }}>
                {item.tag}
              </div>
            </div>

            {/* Content area */}
            <div style={{ padding: "14px", borderTop: `1px solid ${item.border}20` }}>
              <div style={{ 
                fontSize: "11px", 
                fontWeight: 800, 
                color: item.border, 
                fontFamily: "'Orbitron', monospace", 
                letterSpacing: "1.5px",
                textTransform: "uppercase"
              }}>
                {item.label}
              </div>
              <div style={{ 
                fontSize: "9px", 
                color: "rgba(255,255,255,0.4)", 
                fontFamily: "'Inter', sans-serif", 
                marginTop: "4px",
                letterSpacing: "0.5px"
              }}>
                Cosmic Achievement • 2025
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-x-0 bottom-0 h-1 transition-all group-hover:h-full group-hover:opacity-10 opacity-0 pointer-events-none"
              style={{ background: `linear-gradient(transparent, ${item.border})` }} />
          </div>
        ))}
      </div>
    </div>
  );
}
