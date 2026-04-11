import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker, SiPostman,
  SiTailwindcss, SiRedux, SiVercel, SiLinux,
} from "react-icons/si";
import { 
  FaCode, FaServer, FaDatabase, FaGear, FaLightbulb, 
  FaAngleRight 
} from "react-icons/fa6";
import { TbApi, TbShieldLock, TbBrandFramerMotion, TbDatabase } from "react-icons/tb";
import { MdDesignServices, MdOutlineArchitecture } from "react-icons/md";
import CircleCarousel3D from "./CircleCarousel3D";

const skills = [
  {
    id: "frontend", title: "Frontend", subtitle: "UI Engineering", Icon: FaCode, accent: "#60a5fa",
    icons: [
      { Icon: SiReact, color: "#61DAFB", label: "React.js" },
      { Icon: SiNextdotjs, color: "#e2e8f0", label: "Next.js" },
      { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
      { Icon: SiCss, color: "#1572B6", label: "CSS3" },
      { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
      { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
      { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind" },
      { Icon: TbBrandFramerMotion, color: "#BB4FCF", label: "Framer" },
    ],
    details: [
      { tech: "React.js", desc: "Component-driven SPA architecture, hooks, state management." },
      { tech: "Next.js", desc: "SSR, SSG, and robust API routes for full-stack apps." },
      { tech: "TypeScript", desc: "Building type-safe, highly scalable enterprise codebases." },
      { tech: "Tailwind CSS", desc: "Utility-first responsive design systems and dark modes." },
      { tech: "Modern UI", desc: "Physics-based animations and high-performance transitions." },
    ],
  },
  {
    id: "backend", title: "Backend", subtitle: "Server Architecture", Icon: FaServer, accent: "#a78bfa",
    icons: [
      { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
      { Icon: SiExpress, color: "#e2e8f0", label: "Express.js" },
      { Icon: TbApi, color: "#06b6d4", label: "REST APIs" },
      { Icon: SiJsonwebtokens, color: "#D63AFF", label: "JWT" },
      { Icon: TbShieldLock, color: "#f59e0b", label: "RBAC" },
      { Icon: MdOutlineArchitecture, color: "#34d399", label: "Sys Design" },
    ],
    details: [
      { tech: "Node.js", desc: "High-performance event-driven server runtime." },
      { tech: "REST APIs", desc: "Stateless architecture with proper versioning and security." },
      { tech: "Auth Systems", desc: "Secure multi-role JWT and session-based auth flows." },
      { tech: "Architecture", desc: "Implementing clean architecture and modular server patterns." },
      { tech: "Optimization", desc: "Caching strategies and query performance tuning." },
    ],
  },
  {
    id: "database", title: "Database", subtitle: "Data Engineering", Icon: FaDatabase, accent: "#34d399",
    icons: [
      { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
      { Icon: SiPostgresql, color: "#336791", label: "PostgreSQL" },
      { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
      { Icon: TbDatabase, color: "#f59e0b", label: "Drizzle" },
    ],
    details: [
      { tech: "MongoDB", desc: "Document-based storage, aggregations, and high availability." },
      { tech: "PostgreSQL", desc: "Relational modeling, complex joins, and transaction safety." },
      { tech: "Data Modeling", desc: "Normalizing data structures for optimal retrieval speeds." },
      { tech: "Drizzle ORM", desc: "Fully typed, lightning-fast database interaction layer." },
      { tech: "Efficiency", desc: "Designing indices and optimizing cold storage strategies." },
    ],
  },
  {
    id: "tools", title: "Tools & DevOps", subtitle: "Workflow mastery", Icon: FaGear, accent: "#fb923c",
    icons: [
      { Icon: SiGit, color: "#F05032", label: "Git" },
      { Icon: SiGithub, color: "#e2e8f0", label: "GitHub" },
      { Icon: SiDocker, color: "#2496ED", label: "Docker" },
      { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
      { Icon: SiVercel, color: "#e2e8f0", label: "Vercel" },
      { Icon: SiLinux, color: "#FCC624", label: "Linux" },
    ],
    details: [
      { tech: "Git / GitHub", desc: "Branching strategies, CI/CD pipelines, and secure PR flows." },
      { tech: "Docker", desc: "Containerizing services for consistent environment parity." },
      { tech: "Deployment", desc: "Automated deployment workflows with Vercel and AWS." },
      { tech: "Linux", desc: "Server management, shell scripting, and security hardening." },
      { tech: "Postman", desc: "Advanced API testing automation and collection sharing." },
    ],
  },
  {
    id: "concepts", title: "Strategy", subtitle: "Problem solving", Icon: FaLightbulb, accent: "#f472b6",
    icons: [
      { Icon: TbApi, color: "#06b6d4", label: "Strategy" },
      { Icon: TbShieldLock, color: "#f59e0b", label: "Security" },
      { Icon: MdOutlineArchitecture, color: "#34d399", label: "Scaling" },
      { Icon: MdDesignServices, color: "#f87171", label: "Design" },
      { Icon: SiRedux, color: "#764ABC", label: "State" },
    ],
    details: [
      { tech: "Problem Solving", desc: "Breaking down complex features into logical sub-tasks." },
      { tech: "Best Practices", desc: "Enforcing DRY, SOLID, and clean code principles." },
      { tech: "Performance", desc: "Auditing and optimizing core web vitals and bundle sizes." },
      { tech: "UI/UX Flow", desc: "Mapping user journeys for intuitive and smooth interactions." },
      { tech: "Leadership", desc: "Guiding development teams towards high-quality delivery." },
    ],
  },
];

function SkillCard({ card }: { card: typeof skills[0] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%", perspective: "1000px" }}
      onClick={(e) => { e.stopPropagation(); setFlipped((f) => !f); }}>
      <div style={{ width: "100%", height: "100%", position: "relative", transformStyle: "preserve-3d", transition: "transform 0.75s cubic-bezier(0.4,0.15,0.2,1)", transform: flipped ? "rotateY(180deg)" : "rotateY(0)", cursor: "pointer" }}>

        {/* FRONT */}
        <div style={{ 
          position: "absolute", inset: 0, 
          backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", 
          borderRadius: "32px", 
          background: "rgba(10, 15, 30, 0.75)", 
          border: `1px solid ${card.accent}30`, 
          backdropFilter: "blur(16px)",
          padding: "32px 24px", 
          display: "flex", flexDirection: "column", alignItems: "center",
          overflow: "hidden",
          boxShadow: `0 8px 32px rgba(0,0,0,0.4), inset 0 0 20px ${card.accent}15`
        }}>
          {/* Top highlight line like in reference */}
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "1px", background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`, opacity: 0.6 }} />
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <div style={{ 
              width: "60px", height: "60px", 
              borderRadius: "18px", 
              background: `${card.accent}15`, 
              border: `1px solid ${card.accent}40`, 
              display: "flex", alignItems: "center", justifyContent: "center", 
              fontSize: "30px", color: card.accent,
              boxShadow: `0 0 20px ${card.accent}20`
            }}>
              <card.Icon />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Orbitron',monospace", fontSize: "14px", fontWeight: 800, color: "#fff", letterSpacing: "1px", textTransform: "uppercase" }}>{card.title}</div>
              <div style={{ fontSize: "9px", color: card.accent, opacity: 0.8, marginTop: "4px", fontFamily: "'Orbitron',monospace", fontWeight: 700 }}>{card.subtitle}</div>
            </div>
          </div>

          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", alignContent: "start", width: "100%" }}>
            {card.icons.slice(0, 6).map(({ Icon, color, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} color={color} />
                </div>
                <span style={{ fontSize: "8px", color: "#64748b", fontFamily: "'Orbitron',monospace", textAlign: "center", fontWeight: 600 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Button like reference image */}
          <div style={{ width: "100%", marginTop: "auto" }}>
            <div style={{ 
              width: "100%", 
              padding: "10px", 
              borderRadius: "14px", 
              background: "rgba(255,255,255,0.03)", 
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "8px",
              color: "#fff", fontSize: "9px", fontWeight: 800,
              fontFamily: "'Orbitron',monospace", letterSpacing: "2px"
            }}>
              EXPLORE SKILLS <span>→</span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: "24px", background: "linear-gradient(155deg,rgba(5,10,24,1),rgba(10,18,44,1))", border: `1.5px solid ${card.accent}40`, padding: "24px 24px 20px", display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: `0 0 50px ${card.accent}15` }}>
          <div style={{ position: "absolute", top: 0, left: "18%", right: "18%", height: "2.5px", background: `linear-gradient(90deg,transparent,${card.accent},transparent)` }} />
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <card.Icon size={24} color={card.accent} />
            <span style={{ fontFamily: "'Orbitron',monospace", fontSize: "12px", fontWeight: 800, color: card.accent, letterSpacing: "1px", textTransform: "uppercase" }}>{card.title}</span>
            <span style={{ marginLeft: "auto", fontSize: "8px", color: "#64748b", fontFamily: "'Orbitron',monospace", fontWeight: 700 }}>← BACK</span>
          </div>
          <div className="custom-scrollbar" style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", overflowY: "auto", paddingRight: "4px" }}>
            {card.details.map((d, i) => (
              <div key={i} style={{ display: "flex", gap: "12px" }}>
                <div style={{ width: "2.5px", background: `linear-gradient(180deg,${card.accent},${card.accent}15)`, borderRadius: "2px", flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#f1f5f9", marginBottom: "4px", fontFamily: "'Outfit',sans-serif" }}>{d.tech}</div>
                  <div style={{ fontSize: "10.5px", color: "#94a3b8", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16 px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            <span className="orbitron text-blue-400 text-xs tracking-widest">ECOSYSTEM</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mt-2 text-white" style={{ fontFamily: "'Outfit',sans-serif" }}>
            My <span className="gradient-text">Architecture</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-lg mx-auto text-sm orbitron tracking-wide" style={{ fontSize: "10.5px" }}>
            TAP ANY CARD TO EXPLORE CORE EXPERTISE
          </p>
        </motion.div>
        {isInView && (
          <div style={{ marginTop: "20px" }}>
            <CircleCarousel3D
              items={skills.map((c) => <SkillCard key={c.id} card={c} />)}
              cardWidth={330} cardHeight={400} autoRotateMs={3000}
              radius={340}
            />
          </div>
        )}
      </div>
    </section>
  );
}
