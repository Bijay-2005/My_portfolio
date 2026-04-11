import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/sahookumarbijay146@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, _captcha: "false" }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bijaykumar-sahoo-8237b2338" },
    { label: "GitHub", href: "https://github.com/Bijay-2005" },
    { label: "Email", href: "mailto:sahookumarbijay146@gmail.com" },
  ];

  return (
    <footer ref={ref} className="relative border-t border-slate-800/50" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* ── Contact Form ── */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-12">
          <span className="orbitron text-blue-400 text-sm tracking-widest uppercase">Let's connect</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-3 text-white">Send a <span className="gradient-text">Message</span></h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">Open to freelance, full-time roles, or a great tech conversation. Drop me a message and I'll get back to you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
          {/* ── Contact info ── */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} className="space-y-6">
            <div>
              <div className="text-white font-bold text-2xl mb-2">Ready to collaborate?</div>
              <p className="text-slate-400 text-sm leading-relaxed">Whether you need a developer to join your team, a freelancer for a project, or just want to connect — my inbox is always open.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: "✉️", label: "Email", value: "sahookumarbijay146@gmail.com", href: "mailto:sahookumarbijay146@gmail.com" },
                { icon: "📱", label: "Phone", value: "+91 9337257442", href: "tel:+919337257442" },
                { icon: "📍", label: "Location", value: "Bhubaneswar, Odisha, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-slate-200 text-sm hover:text-blue-400 transition-colors font-medium">{item.value}</a>
                    ) : (
                      <span className="text-slate-200 text-sm font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 space-y-4">
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">Your Name</label>
                <input
                  name="name" value={form.name} onChange={handleChange} required
                  placeholder="John Doe"
                  className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">Email Address</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="john@example.com"
                  className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 transition-all"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={4}
                  placeholder="Hi Bijay, I'd love to discuss..."
                  className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all"
                style={{ background: status === "sent" ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#3b82f6,#8b5cf6)", opacity: status === "sending" ? 0.7 : 1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(96,165,250,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "idle" && "📨 Send Message"}
                {status === "sending" && "⏳ Sending..."}
                {status === "sent" && "✅ Message Sent!"}
                {status === "error" && "❌ Failed — Try Email Directly"}
              </motion.button>
              <p className="text-slate-600 text-xs text-center">Your message goes directly to my Gmail inbox.</p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-800/50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="orbitron text-xl font-bold gradient-text">BK.</span>
            <div className="h-4 w-px bg-slate-700" />
            <span className="text-slate-400 text-sm">Bijay Kumar Sahoo</span>
          </div>
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <motion.a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors text-sm" whileHover={{ y: -2 }}>
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="text-slate-500 text-xs">© {new Date().getFullYear()} Bijay Kumar Sahoo · React & Three.js</div>
        </div>
      </div>
    </footer>
  );
}
