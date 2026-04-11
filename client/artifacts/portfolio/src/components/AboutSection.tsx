import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

function CircularProgress({ pct, color, size = 100 }: { pct: number; color: string; size?: number }) {
  const r = (size - 14) / 2;
  const circ = 2 * Math.PI * r;
  const [val, setVal] = useState(0);
  useEffect(() => { const t = setTimeout(() => setVal(pct), 300); return () => clearTimeout(t); }, [pct]);
  const dash = (val / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={10} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={10} strokeLinecap="round"
        strokeDasharray={`${circ}`} strokeDashoffset={`${circ - dash}`}
        style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.4,0,0.2,1)", filter: `drop-shadow(0 0 6px ${color}80)` }} />
    </svg>
  );
}

const contactItems = [
  { Icon: MdPhone, label: "PHONE", value: "+91 9337257442", href: "tel:+919337257442", color: "#3b82f6" },
  { Icon: MdEmail, label: "EMAIL", value: "sahookumarbijay146@gmail.com", href: "mailto:sahookumarbijay146@gmail.com", color: "#ea4335" },
  { Icon: MdLocationOn, label: "LOCATION", value: "Bhubaneswar, Odisha, India", href: null, color: "#10b981" },
  { Icon: FaLinkedin, label: "LINKEDIN", value: "bijaykumar-sahoo-8237b2338", href: "https://www.linkedin.com/in/bijaykumar-sahoo-8237b2338", color: "#0A66C2" },
  { Icon: SiGithub, label: "GITHUB", value: "github.com/Bijay-2005", href: "https://github.com/Bijay-2005", color: "#e2e8f0" },
];

const languages = [
  { name: "English", level: 85, label: "Proficient", color: "#3b82f6", emoji: "🇬🇧" },
  { name: "Hindi", level: 78, label: "Proficient", color: "#8b5cf6", emoji: "🇮🇳" },
  { name: "Odia", level: 100, label: "Native", color: "#10b981", emoji: "🌿" },
];

const coreStrengths = ["REST APIs", "JWT Auth", "RBAC", "API Integration", "System Design", "UI/UX", "Docker", "Agile Dev"];

const eduPhases = [
  { icon: "📚", label: "10th Grade", color: "#06b6d4", school: "Kendriya Vidyalaya, Bhubaneswar", board: "CBSE Board", year: "Completed 2021", detail: "Science & Mathematics focus" },
  { icon: "🔬", label: "12th Grade", color: "#8b5cf6", school: "Kendriya Vidyalaya, Bhubaneswar", board: "CBSE Board — PCM", year: "Completed 2023", detail: "Physics, Chemistry, Mathematics" },
  { icon: "🎓", label: "BCA — Graduation", color: "#3b82f6", school: "Trident Academy of Creative Technology", board: "Bachelor of Computer Applications", year: "Aug 2023 — Present", detail: "Full-stack, DSA, DBMS, Software Engineering", current: true },
];

export default function AboutSection() {
  const ref = useRef(null);
  const langRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const langInView = useInView(langRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* ── ABOUT ME ── */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="orbitron text-blue-400 text-xs tracking-widest">WHO I AM</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mt-2 text-white" style={{ fontFamily: "'Outfit',sans-serif" }}>
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          {/* Intro box — full width */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }} className="mb-8">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "1px", background: "linear-gradient(90deg,transparent,rgba(96,165,250,0.4),transparent)" }} />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl">👨‍💻</div>
                <div>
                  <div className="text-white font-bold text-xl" style={{ fontFamily: "'Outfit',sans-serif" }}>Bijay Kumar Sahoo</div>
                  <div className="text-blue-400 text-sm orbitron tracking-wider">MERN STACK DEVELOPER</div>
                </div>
                <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-xs orbitron tracking-widest">AVAILABLE</span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm max-w-3xl">
                Passionate MERN Stack Developer with hands-on experience building scalable, responsive web applications.
                Currently pursuing BCA at Trident Academy of Creative Technology, Bhubaneswar.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6 text-sm max-w-3xl">
                My journey spans national hackathon wins, production-grade applications, and a continuous drive to improve —
                from architecting robust backends to crafting delightful user experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                {coreStrengths.map((s) => (
                  <span key={s} className="tag-chip">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact details — under intro, displayed as a clean grid */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.28 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {contactItems.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 + i * 0.07 }}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="flex flex-col items-start gap-2 p-4 rounded-xl glass-card hover:border-blue-500/25 transition-all group"
                      style={{ textDecoration: "none" }}>
                      <div className="flex items-center gap-2 w-full">
                        <item.Icon size={18} color={item.color} style={{ filter: `drop-shadow(0 0 6px ${item.color}60)`, flexShrink: 0 }} />
                        <span className="orbitron text-xs tracking-widest" style={{ color: item.color, opacity: 0.75 }}>{item.label}</span>
                      </div>
                      <span className="text-slate-200 text-xs font-medium leading-tight break-all group-hover:text-blue-400 transition-colors">{item.value}</span>
                    </a>
                  ) : (
                    <div className="flex flex-col items-start gap-2 p-4 rounded-xl glass-card">
                      <div className="flex items-center gap-2 w-full">
                        <item.Icon size={18} color={item.color} style={{ filter: `drop-shadow(0 0 6px ${item.color}60)`, flexShrink: 0 }} />
                        <span className="orbitron text-xs tracking-widest" style={{ color: item.color, opacity: 0.75 }}>{item.label}</span>
                      </div>
                      <span className="text-slate-200 text-xs font-medium leading-tight">{item.value}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── EDUCATION ── */}
      <div className="pb-16 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span className="orbitron text-cyan-400 text-xs tracking-widest">ACADEMIC JOURNEY</span>
            </div>
            <h3 className="text-3xl font-bold mt-2 text-white" style={{ fontFamily: "'Outfit',sans-serif" }}>
              <span className="gradient-text">Education</span>
            </h3>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/40 via-blue-500/30 via-violet-500/20 to-transparent" />
            <div className="flex flex-col gap-10">
              {eduPhases.map((edu, i) => {
                const isRight = i % 2 !== 0;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: isRight ? 30 : -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 + i * 0.18 }}
                    className={`relative flex items-center gap-8 ${isRight ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="flex-1">
                      <div className="glass-card rounded-xl p-5" style={{ borderColor: `${edu.color}22` }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-base">{edu.icon}</span>
                          <span className="orbitron text-xs font-bold" style={{ color: edu.color }}>{edu.label}</span>
                          {edu.current && (
                            <span className="ml-auto flex items-center gap-1 text-xs text-green-400 font-semibold orbitron">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> NOW
                            </span>
                          )}
                        </div>
                        <div className="text-white font-bold text-sm mb-0.5" style={{ fontFamily: "'Outfit',sans-serif" }}>{edu.school}</div>
                        <div className="text-sm mb-1 font-semibold" style={{ color: edu.color, opacity: 0.85 }}>{edu.board}</div>
                        <div className="text-slate-500 text-xs mb-1 orbitron tracking-wider">{edu.year}</div>
                        <div className="text-slate-500 text-xs">{edu.detail}</div>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-11 h-11 rounded-full border-2 flex items-center justify-center text-lg"
                        style={{ background: `${edu.color}10`, borderColor: `${edu.color}50`, boxShadow: `0 0 20px ${edu.color}40` }}>
                        {edu.icon}
                      </div>
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── LANGUAGES ── */}
      <div className="pb-24 px-6" ref={langRef}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={langInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-4">
              <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
              <span className="orbitron text-violet-400 text-xs tracking-widest">COMMUNICATION</span>
            </div>
            <h3 className="text-3xl font-bold mt-2 text-white" style={{ fontFamily: "'Outfit',sans-serif" }}>
              <span className="gradient-text">Languages</span>
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((lang, i) => (
              <motion.div key={lang.name} initial={{ opacity: 0, y: 24 }} animate={langInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center card-hover" style={{ boxShadow: `0 4px 20px ${lang.color}15` }}>
                <div className="relative mb-4" style={{ width: "96px", height: "96px" }}>
                  {langInView && <CircularProgress pct={lang.level} color={lang.color} size={96} />}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span style={{ fontSize: "20px" }}>{lang.emoji}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: lang.color, fontFamily: "'Orbitron',monospace" }}>{lang.level}%</span>
                  </div>
                </div>
                <div className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{lang.name}</div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold orbitron" style={{ background: `${lang.color}12`, border: `1px solid ${lang.color}30`, color: lang.color }}>{lang.label}</div>
                <div className="mt-4 w-full h-1.5 rounded-full bg-slate-800/70 overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg,${lang.color},${lang.color}80)` }}
                    initial={{ width: 0 }} animate={langInView ? { width: `${lang.level}%` } : { width: 0 }}
                    transition={{ duration: 1.4, delay: 0.4 + i * 0.15, ease: "easeOut" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
