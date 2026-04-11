import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "HealthNet — Healthcare Platform",
    period: "Aug 2025 – Dec 2025",
    description:
      "A full-stack unified digital healthcare platform designed for government hospitals. Integrates smart queue management, pandemic alerts, blood bank tracking, pharmacy access, emergency support, and AI-based patient assistance.",
    highlights: [
      "Unified platform connecting patients, hospitals, and admins",
      "Smart queue management & appointment handling",
      "AI-based symptom assistance & queue optimization",
      "Secure data handling with role-based dashboards",
      "Scalable architecture for multiple healthcare services",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/Bijay-2005/HealthNet-Bijay.git",
    color: "from-blue-500 to-cyan-600",
    glowColor: "rgba(59,130,246,0.2)",
    icon: "🏥",
    featured: true,
  },
  {
    title: "E-Learning Web Platform",
    period: "Dec 2024 – Jan 2025",
    description:
      "A full-stack e-learning web platform for modern education and coaching institutes. Built with containerization practices and supports multi-role users including Admin, Faculty, and Students.",
    highlights: [
      "Multi-role user architecture (Admin, Faculty, Students)",
      "Secure backend with structured content delivery & access control",
      "Protected video streaming with payment workflow integration",
      "Deployment-ready system using containerization practices",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Docker", "Express.js", "JWT"],
    github: "https://github.com/someshsrichandan/Elearning.git",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.2)",
    icon: "🎓",
    featured: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="orbitron text-blue-400 text-sm tracking-widest uppercase">What I've built</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-white">
            Major <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Real-world applications built with scalability, security, and user experience at the core.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative group"
            >
              {project.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full text-white text-xs font-semibold z-10">
                  Featured Project
                </div>
              )}

              <div
                className="glass-card rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/30"
                style={{ boxShadow: `0 4px 20px ${project.glowColor}` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-xl">{project.title}</h3>
                        <div className="text-slate-400 text-sm mt-1">{project.period}</div>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6">{project.description}</p>

                    <div className="space-y-2">
                      {project.highlights.map((item, hi) => (
                        <motion.div
                          key={hi}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: i * 0.2 + hi * 0.08 + 0.4 }}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="text-blue-400 mt-0.5 flex-shrink-0">▹</span>
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider mb-3">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-white border border-white/10`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200 text-sm font-medium group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Source
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
