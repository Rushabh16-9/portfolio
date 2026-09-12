'use client';

import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Award, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

const timeline = [
  {
    period: 'Dec 2025 – Present',
    role: 'Full Stack Developer Intern',
    organization: 'Onfees',
    type: 'Internship & Training',
    desc: 'Engineering enterprise web applications, building AI-based student admission form data extraction tools, developing PHP & TypeScript REST APIs, and maintaining MySQL databases.',
    skills: ['Python OCR', 'PHP', 'TypeScript', 'MySQL', 'REST APIs'],
    icon: Briefcase,
    color: 'text-cyan-400',
    border: 'border-cyan-500/40',
  },
  {
    period: 'Verified LinkedIn Education',
    role: 'Diploma in Computer Engineering',
    organization: "SVKM's Shri Bhagubhai Mafatlal Polytechnic (SBMP), Mumbai",
    type: 'Education',
    desc: 'Completed full-time 3-year Diploma curriculum in Computer Engineering. Coursework in Data Structures, OOP, OS, MySQL, Software Engineering, and Computer Networks.',
    skills: ['Data Structures', 'OOP', 'SQL', 'OS', 'Networking'],
    icon: GraduationCap,
    color: 'text-purple-400',
    border: 'border-purple-500/40',
  },
  {
    period: '2023 – Present',
    role: 'Open Source & Independent Developer',
    organization: 'GitHub (@Rushabh16-9)',
    type: 'Projects',
    desc: 'Created over 17 public repositories spanning AI Smart Wardrobes, Gmail MCP Servers, Flutter Fitness Apps, Wisdom News Readers, and Real-Time Games.',
    skills: ['Next.js', 'Flutter', 'FastAPI', 'MCP', 'Git'],
    icon: Award,
    color: 'text-emerald-400',
    border: 'border-emerald-500/40',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
        >
          <User className="w-3.5 h-3.5" />
          <span>Biography & Timeline</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          About <span className="text-gradient-cyan">Rushabh Shah</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
          Full-stack web platforms, mobile apps, and AI document integration developer.
        </p>
      </div>

      {/* Profile Overview & Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>Who I Am</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              I am a Computer Engineering graduate from <strong className="text-white">SVKM&apos;s Shri Bhagubhai Mafatlal Polytechnic (SBMP), Mumbai</strong>, currently gaining real-world experience as a Full Stack Developer Intern at <strong className="text-cyan-400">Onfees</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              I specialize in combining robust backends in <strong className="text-purple-300">Python and PHP</strong> with fluid frontends in <strong className="text-cyan-300">Next.js</strong>, mobile solutions in <strong className="text-emerald-300">Flutter</strong>, and <strong className="text-amber-300">AI document OCR extraction</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
            <div>
              <span className="text-[10px] text-gray-500 font-mono uppercase">Location</span>
              <p className="text-xs font-semibold text-white">Mumbai, Maharashtra, India</p>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-mono uppercase">Status</span>
              <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Onfees Intern
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950/40 border border-purple-500/20"
        >
          <h2 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span>Core Principles</span>
          </h2>
          <div className="space-y-3">
            {[
              {
                title: 'Clean Modular Architecture',
                desc: 'Structuring codebases for reusability, strict typing, and seamless testing.',
              },
              {
                title: 'AI & Automation First',
                desc: 'Integrating AI OCR and Model Context Protocol servers to automate manual effort.',
              },
              {
                title: 'Cross-Platform Performance',
                desc: 'Ensuring 60fps mobile and web user experiences across all devices.',
              },
            ].map((p, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-white">{p.title}</h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Mobile-Friendly Experience Timeline */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono">
            Milestones
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white mt-0.5">Education & Career Timeline</p>
        </div>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-24 pl-5 sm:pl-8 space-y-8">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 ${item.border} flex items-center justify-center shadow-md`}
                >
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>

                {/* Period Badge */}
                <div className="mb-1.5">
                  <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 font-semibold">
                    {item.period}
                  </span>
                </div>

                {/* Card Content */}
                <div className={`glass-panel p-4 sm:p-6 rounded-2xl sm:rounded-3xl border ${item.border} space-y-2`}>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 font-mono">
                    {item.organization}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
