import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaTrophy, FaAward, FaHospital, FaGraduationCap } from "react-icons/fa6";
import CircleCarousel3D from "./CircleCarousel3D";
import PhotoCarousel from "./PhotoCarousel";

const achievements = [
  {
    id: "sih", Icon: FaTrophy, badge: "RUNNER-UP",
    event: "Smart India Hackathon 2025",
    org: "Grand Finale · National Level",
    accent: "#f59e0b",
    frontDesc: "Achieved Runner-Up at India's largest national hackathon, competing against hundreds of teams by building a unified healthcare platform.",
    tags: ["Healthcare", "SIH 2025", "National"],
    link: "https://drive.google.com/file/d/1rFbCkc3bfRuML5JfLKC9aI5Cb-VgYWL9/view?usp=drivesdk",
    linkLabel: "Certificate",
    role: "Full-Stack Developer & UI Lead",
    contribution: [
      { title: "System Architecture", desc: "Designed the entire backend schema for a multi-role hospital management system — patients, doctors, admins, emergency staff." },
      { title: "Frontend Engineering", desc: "Built all patient-facing dashboards using React.js + Tailwind CSS with real-time queue status, appointment booking." },
      { title: "API Integration", desc: "Integrated REST APIs for blood bank availability, bed tracking, and pandemic alert broadcasting across hospital network." },
      { title: "Leadership", desc: "Led team planning and demo presentation at the SIH Grand Finale 2025 — delivery of a live product under 36 hours." },
    ],
  },
  {
    id: "iit", Icon: FaAward, badge: "PARTICIPANT",
    event: "Prabha 2025",
    org: "IIT Bhubaneswar · National Event",
    accent: "#6366f1",
    frontDesc: "Built a scalable e-learning platform at IIT Bhubaneswar's prestigious national competition with real-time collaboration and multi-user architecture.",
    tags: ["E-Learning", "IIT", "Architecture"],
    link: "https://drive.google.com/file/d/1YkLzJzVYUUaZI0cquGn0zAJb15LiMMzo/view?usp=drivesdk",
    linkLabel: "Certificate",
    role: "Frontend Developer & Architect",
    contribution: [
      { title: "UI/UX Design", desc: "Designed and implemented the complete frontend student dashboard, course viewer, and progress tracker." },
      { title: "Real-Time Features", desc: "Built real-time collaboration features including live quiz participation and instructor broadcast using WebSocket." },
      { title: "Role-Based Auth", desc: "Architected the access system for Students, Faculty, and Admins with protected routes and conditional rendering." },
      { title: "Coordination", desc: "Coordinated with backend teammates to profile API contracts and manage shared data models under competition timelines." },
    ],
  },
  {
    id: "healthnet", Icon: FaHospital, badge: "FEATURED BUILD",
    event: "HealthNet Platform",
    org: "Full-Stack Healthcare Application",
    accent: "#10b981",
    frontDesc: "A unified digital platform for government hospitals with AI assistance, smart queue management, blood bank tracking, and emergency support.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Bijay-2005/HealthNet-Bijay.git",
    linkLabel: "GitHub",
    role: "Solo Full-Stack Developer",
    contribution: [
      { title: "Backend Core", desc: "Engineered the entire Node.js + Express backend with 5 user roles and 40+ secure API endpoints." },
      { title: "AI Symptom Module", desc: "Integrated an AI-powered symptom checker that guides patients to the right department, reducing visit friction." },
      { title: "Live Tracking", desc: "Implemented live blood bank inventory, bed tracker, and ambulance dispatch panel via real-time data polling." },
      { title: "Alert System", desc: "Built a pandemic alert broadcasting system allowing admins to push emergency notifications across the entire platform." },
    ],
  },
  {
    id: "elearning", Icon: FaGraduationCap, badge: "PROJECT LEAD",
    event: "E-Learning Platform",
    org: "Multi-Role Architecture",
    accent: "#8b5cf6",
    frontDesc: "Full-stack education platform with protected video streaming, payment workflows, and Admin, Faculty, and Student role-based experiences.",
    tags: ["MERN", "Docker", "Payments"],
    link: "https://github.com/someshsrichandan/Elearning.git",
    linkLabel: "GitHub",
    role: "Lead Developer & DevOps",
    contribution: [
      { title: "Three-Role System", desc: "Designed separate dashboards for Admin (users/courses), Faculty (grade/upload), and Students (track/enroll)." },
      { title: "Video Protection", desc: "Implemented signed URLs and access-control for video streaming, preventing unauthorized content sharing." },
      { title: "Payment Flow", desc: "Integrated course payment workflow with enrolment gate — automated confirmation upon mock payment success." },
      { title: "DevOps", desc: "Containerized the full stack with Docker Compose — separate instances for front, back and MongoDB instances." },
    ],
  },
];

function AchCard({ card }: { card: typeof achievements[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%", perspective: "1000px" }}
      onClick={(e) => { e.stopPropagation(); setFlipped((f) => !f); }}>
      <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", transition: "transform 0.8s cubic-bezier(0.4,0.15,0.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0)", cursor: "pointer" }}>

        {/* FRONT */}
        <div style={{ 
          position: "absolute", inset: 0, 
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", 
          borderRadius: "32px", 
          background: "rgba(10, 18, 40, 0.7)", 
          border: `1px solid ${card.accent}30`, 
          backdropFilter: "blur(16px)",
          padding: "32px 24px", 
          display: "flex", flexDirection: "column", alignItems: "center",
          overflow: "hidden",
          boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 0 20px ${card.accent}15`
        }}>
          {/* Top highlight line like in reference */}
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "1px", background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`, opacity: 0.6 }} />
          
          {/* Icon Box */}
          <div style={{ 
            width: "60px", height: "60px", 
            borderRadius: "18px", 
            background: `${card.accent}15`, 
            border: `1px solid ${card.accent}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "24px",
            boxShadow: `0 0 20px ${card.accent}30`
          }}>
            <card.Icon size={30} color={card.accent} />
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", textAlign: "center", width: "100%" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#fff", marginBottom: "8px", fontFamily: "'Outfit',sans-serif" }}>{card.event}</div>
            <div style={{ fontSize: "10px", color: card.accent, fontWeight: 700, marginBottom: "16px", fontFamily: "'Orbitron',monospace", letterSpacing: "2px", opacity: 0.8 }}>{card.org}</div>
            <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6, marginBottom: "20px", fontFamily: "'Inter', sans-serif", opacity: 0.9 }}>{card.frontDesc}</p>
          </div>

          {/* Button like reference image */}
          <div style={{ width: "100%", marginTop: "auto" }}>
            <div style={{ 
              width: "100%", 
              padding: "12px", 
              borderRadius: "16px", 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "10px",
              color: "#fff", fontSize: "10px", fontWeight: 800,
              fontFamily: "'Orbitron',monospace", letterSpacing: "2px",
              transition: "all 0.3s ease"
            }}>
              EXPLORE SERVICE <span>→</span>
            </div>
          </div>
        </div>

        {/* BACK — Contribution details */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: "24px", background: "linear-gradient(155deg,rgba(5,10,24,1),rgba(10,18,40,1))", border: `1.5px solid ${card.accent}45`, padding: "24px 24px 20px", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: `0 0 60px ${card.accent}20` }}>
          <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "2.5px", background: `linear-gradient(90deg,transparent,${card.accent},transparent)` }} />

          {/* header */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <card.Icon size={24} color={card.accent} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "12px", fontWeight: 800, color: card.accent, letterSpacing: "0.5px", textTransform: "uppercase" }}>{card.event}</div>
              <div style={{ fontSize: "9px", color: "#64748b", fontFamily: "'Orbitron',monospace", marginTop: "2px", fontWeight: 700 }}>ROLE: {card.role}</div>
            </div>
          </div>

          <div style={{ height: "1px", background: `linear-gradient(90deg,transparent,${card.accent}40,transparent)`, margin: "10px 0 16px" }} />

          {/* Contribution blocks */}
          <div className="custom-scrollbar" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px", overflowY: "auto", paddingRight: "4px" }}>
            {card.contribution.map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "12px" }}>
                <div style={{ width: "2.5px", background: `linear-gradient(180deg,${card.accent},${card.accent}15)`, borderRadius: "2px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#f1f5f9", marginBottom: "4px", fontFamily: "'Outfit',sans-serif" }}>{c.title}</div>
                  <div style={{ fontSize: "10.5px", color: "#94a3b8", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href={card.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
            style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "10px", borderRadius: "12px", background: `${card.accent}20`, border: `1.5px solid ${card.accent}50`, fontSize: "11px", color: card.accent, fontWeight: 900, textDecoration: "none", fontFamily: "'Orbitron',monospace", letterSpacing: "1px" }}>
            VIEW {card.linkLabel.toUpperCase()}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <section id="achievements" className="section-padding relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-4">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
              <span className="orbitron text-violet-400 text-xs tracking-widest">RECOGNITION</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mt-2 text-white" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto orbitron tracking-wide" style={{ fontSize: "10.5px" }}>
              TAP FRONT CARD TO REVEAL DEEP CONTRIBUTIONS
            </p>
          </motion.div>

          {isInView && (
            <div style={{ marginTop: "20px" }}>
              <CircleCarousel3D
                items={achievements.map((c) => <AchCard key={c.id} card={c} />)}
                cardWidth={370} cardHeight={420} autoRotateMs={3500}
                radius={360}
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Photo Carousel ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }} className="text-center mb-10">
            <span className="orbitron text-blue-400 text-xs tracking-widest">MOMENTS</span>
            <h3 className="text-3xl font-black text-white mt-2" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Photo <span className="gradient-text">Gallery</span>
            </h3>
          </motion.div>
          <PhotoCarousel />
        </div>
      </section>
    </>
  );
}
