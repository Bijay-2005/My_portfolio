import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCertificate, FaAmazon, FaServer } from "react-icons/fa6";
import { SiGoogle, SiMeta, SiPostman, SiFreecodecamp, SiCisco } from "react-icons/si";
import certKhacks from "@assets/cert_khacks.jpg";
import certPravaah from "@assets/cert_pravaah.jpg";
import certHackin24 from "@assets/cert_hackin24.jpg";
import trithonWinner from "@assets/highlight_trithon.jpg";
import sihWinner from "@assets/highlight_sih2025.jpg";

const certifications = [
  {
    id: "k-hacks-3",
    Icon: FaCertificate,
    title: "K Hacks 3.0",
    issuer: "Anna University",
    image: certKhacks,
    accent: "#3b82f6",
    date: "2024",
    desc: "Participated in K Hacks 3.0 organized by Anna University, Chennai.",
    link: "#",
    tags: ["Hackathon", "Participation"]
  },
  {
    id: "pravaah-25",
    Icon: FaCertificate,
    title: "Web Hackathon",
    issuer: "PRAVAAH'25",
    image: certPravaah,
    accent: "#f59e0b",
    date: "2025",
    desc: "Participated in the Web Hackathon at PRAVAAH'25, IIT Bhubaneswar.",
    link: "#",
    tags: ["Web Dev", "Hackathon"]
  },
  {
    id: "hackin-24",
    Icon: FaCertificate,
    title: "HACKIN'24 - SIH",
    issuer: "Smart India Hackathon",
    image: certHackin24,
    accent: "#ef4444",
    date: "2024",
    desc: "Participated in HACKIN'24 Internal Hackathon for SIH 2024.",
    link: "#",
    tags: ["SIH", "Participation"]
  },
  {
    id: "hackin-25",
    Icon: FaCertificate,
    title: "SIH GRAND FINALE",
    issuer: "Smart India Hackathon '25",
    image: sihWinner,
    accent: "#f59e0b",
    date: "2025",
    desc: "Runner-Up in the grand finale of the Smart India Hackathon.",
    link: "#",
    tags: ["SIH", "Runner-Up"],
    highlight: true,
  },
  {
    id: "trithon-26",
    Icon: FaCertificate,
    title: "TRITHON WINNER",
    issuer: "Trident Group",
    image: trithonWinner,
    accent: "#3b82f6",
    date: "2026",
    desc: "5th Runner Up in the 24 Hours Non-Stop Hackathon TRITHON.",
    link: "#",
    tags: ["Hackathon", "Winner"],
    highlight: true,
  }
];

function CertCard({ cert }: { cert: typeof certifications[0] & { highlight?: boolean } }) {
  return (
    <div className="relative group flex-shrink-0">
      {/* Massive Neon Light Aura Behind the Card */}
      {cert.highlight && (
        <div 
          className="absolute inset-0 blur-2xl opacity-60 pointer-events-none group-hover:opacity-100 transition-all duration-500 rounded-[30px]" 
          style={{ background: cert.accent, transform: "scale(1.05) translateY(10px)", zIndex: 0 }} 
        />
      )}
      
      <a 
        href={cert.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative cursor-pointer block" 
        style={{
          zIndex: 10,
        width: "480px",
        height: "360px", 
        borderRadius: "24px",
        background: cert.highlight 
          ? `linear-gradient(135deg, ${cert.accent}15, rgba(15, 23, 42, 0.8), ${cert.accent}15)`
          : "rgba(15, 23, 42, 0.4)",
        border: `1px solid ${cert.accent}${cert.highlight ? '90' : '30'}`,
        backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        boxShadow: cert.highlight 
          ? `0 0 40px ${cert.accent}40, inset 0 0 30px ${cert.accent}20` 
          : `0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px ${cert.accent}05`,
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        textDecoration: "none"
      }}
    >
      {/* Perspective / Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
           style={{
             background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
             transform: "translateX(-100%) skewX(-15deg)",
             animation: "shine 3s infinite"
           }} />

      {/* Main Certificate Frame (Where the photo goes) */}
      <div style={{
        flex: 1,
        margin: "8px",
        borderRadius: "16px",
        background: "rgba(0,0,0,0.8)",
        border: "1px solid rgba(255,255,255,0.05)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {cert.image ? (
          <img 
            src={cert.image} 
            alt={cert.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease"
            }}
            className="group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-4 text-slate-600">
             <cert.Icon size={64} style={{ opacity: 0.1 }} color={cert.accent} />
             <div className="text-[10px] orbitron tracking-[3px] uppercase opacity-30">Place Certificate Photo</div>
          </div>
        )}

        {/* Floating Badge */}
        <div style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          background: cert.highlight ? `linear-gradient(135deg, ${cert.accent}, #000)` : "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${cert.accent}${cert.highlight ? '90' : '40'}`,
          borderRadius: "8px",
          padding: "6px 10px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: cert.highlight ? `0 0 15px ${cert.accent}40` : 'none'
        }}>
          {cert.highlight && <span className="text-white text-[10px] orbitron font-bold uppercase tracking-widest">WINNER</span>}
          <cert.Icon size={18} color={cert.highlight ? "#fff" : cert.accent} />
        </div>
      </div>

      {/* Info Part (Lower Part) - Clean Version */}
      <div style={{
        padding: "16px 24px 24px",
        position: "relative",
        zIndex: 2
      }}>
        <div className="flex justify-between items-center">
          <div>
            <h4 style={{
              fontSize: "15px", fontWeight: 800,
              color: "#fff", marginBottom: "2px",
              fontFamily: "'Outfit', sans-serif"
            }}>
              {cert.title}
            </h4>
            <div style={{
              fontSize: "9px", fontWeight: 700,
              color: cert.accent,
              fontFamily: "'Orbitron', monospace",
              letterSpacing: "1px",
              opacity: 0.8,
              textTransform: "uppercase"
            }}>
              {cert.issuer}
            </div>
          </div>
          <div style={{
            fontSize: "11px",
            color: "#94a3b8",
            fontFamily: "'Orbitron', monospace",
            fontWeight: 700
          }}>
            {cert.date}
          </div>
        </div>
      </div>
      
      {/* Decorative border glow */}
      <div className={`absolute inset-0 border-2 rounded-[24px] pointer-events-none transition-all duration-300 ${cert.highlight ? 'border-' + cert.accent + '/50' : 'border-transparent group-hover:border-blue-500/20'}`} style={{ borderColor: cert.highlight ? cert.accent : undefined }} />
    </a>
    </div>
  );
}

export default function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-[#020617]" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden text-white">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="text-center mb-10">
          <span className="orbitron text-blue-400 text-xs tracking-widest uppercase">VERIFIED CREDENTIALS</span>
          <h3 className="text-3xl font-black text-white mt-2" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Professional <span className="gradient-text">Certifications</span>
          </h3>
        </motion.div>
      </div>

      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden relative pb-12 pt-4">
        {/* Gradients on edges for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex w-max animate-marquee hover-pause"
        >
          {/* First set */}
          <div className="flex gap-6 pr-6 px-6">
            {certifications.map((cert) => (
              <CertCard key={`${cert.id}-1`} cert={cert} />
            ))}
          </div>
          {/* Second set for infinite loop */}
          <div className="flex gap-6 pr-6">
            {certifications.map((cert) => (
              <CertCard key={`${cert.id}-2`} cert={cert} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
