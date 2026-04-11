import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@assets/image_1775752140684.png";
import { SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const HeroScene = lazy(() => import("./HeroScene"));

const socialLinks = [
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/bijaykumar-sahoo-8237b2338", color: "#0A66C2", glow: "rgba(10,102,194,0.5)" },
  { Icon: SiGithub, label: "GitHub", href: "https://github.com/Bijay-2005", color: "#e2e8f0", glow: "rgba(226,232,240,0.3)" },
  { Icon: MdEmail, label: "Email", href: "mailto:sahookumarbijay146@gmail.com", color: "#ea4335", glow: "rgba(234,67,53,0.4)" },
];

export default function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-[1] grid-bg opacity-20 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-[10] max-w-7xl mx-auto px-6 pt-24 pb-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* ── LEFT ── */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/6 text-green-400 text-xs font-semibold mb-6 orbitron tracking-[2px]">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.85 }}>
              <p className="orbitron text-slate-500 text-xs tracking-[4px] uppercase mb-2">Hi, I'm</p>
              <h1 className="font-black leading-none mb-1 tracking-tight gradient-text animate-gradient"
                style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)", fontFamily: "'Outfit', sans-serif" }}>
                Bijay Kumar
              </h1>
              <h1 className="font-black leading-none mb-4 tracking-tight text-white"
                style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)", fontFamily: "'Outfit', sans-serif" }}>
                Sahoo
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
              className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-blue-400 to-transparent" />
              <span className="orbitron text-blue-400 text-xs font-semibold tracking-[2px] uppercase animate-glow-pulse">
                MERN STACK DEVELOPER
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }}
              className="text-slate-400 text-sm leading-relaxed mb-7 max-w-[420px]">
              Building scalable full-stack web applications with clean architecture,
              futuristic UI/UX, and real-world impact — from national hackathon wins to
              production-grade systems.
            </motion.p>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-8">
              <motion.button onClick={() => handleScrollTo("#projects")}
                className="px-7 py-3 text-white font-bold rounded-xl cyber-btn text-sm"
                whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(96,165,250,0.55)" }}
                whileTap={{ scale: 0.97 }}>
                VIEW PROJECTS
              </motion.button>
              <motion.button onClick={() => handleScrollTo("#contact")}
                className="px-7 py-3 border border-blue-500/35 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/8 transition-all orbitron text-xs tracking-widest"
                whileHover={{ scale: 1.03, boxShadow: "0 0 18px rgba(96,165,250,0.18)" }}
                whileTap={{ scale: 0.97 }}>
                CONTACT ME
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
              className="grid grid-cols-4 gap-2 pb-6 mb-6 border-b border-slate-800/50">
              {[
                { val: "2+", sub: "Yrs Coding" },
                { val: "5+", sub: "Projects" },
                { val: "2", sub: "Awards" },
                { val: "MERN", sub: "Stack" },
              ].map((s) => (
                <div key={s.sub} className="text-center">
                  <div className="stat-num" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>{s.val}</div>
                  <div className="orbitron text-slate-600 text-xs mt-0.5 tracking-wider">{s.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Social icons */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}
              className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <motion.a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: `0 0 22px ${s.glow}` }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${s.color}25`, backdropFilter: "blur(8px)" }}>
                  <s.Icon size={17} color={s.color} />
                  <span className="orbitron text-xs tracking-wide" style={{ color: s.color }}>{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Perfect circle photo ── */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="flex justify-center lg:justify-end"
            style={{ marginTop: "-40px" }}>
            <div className="relative" style={{ width: "380px", height: "380px" }}>
              {/* Orbit rings */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: "-30px", borderRadius: "50%", border: "1px dashed rgba(96,165,250,0.13)" }} />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: "-55px", borderRadius: "50%", border: "1px dashed rgba(167,139,250,0.07)" }} />

              {/* Radial glow */}
              <div style={{ position: "absolute", inset: "-28px", borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.16) 0%, transparent 70%)", filter: "blur(20px)", pointerEvents: "none" }} />

              {/* Photo — perfect circle */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "100%", height: "100%" }}
              >
                <div style={{
                  width: "100%", height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2.5px solid rgba(96,165,250,0.38)",
                  boxShadow: "0 0 55px rgba(96,165,250,0.25), 0 0 110px rgba(96,165,250,0.09)",
                }}>
                  <img
                    src={profilePhoto}
                    alt="Bijay Kumar Sahoo"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
