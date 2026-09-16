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
    accent: 'text-indigo-600',
    border: 'border-l-indigo-500',
    iconBg: 'bg-indigo-100 border-indigo-200',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    period: 'Verified LinkedIn Education',
    role: 'Diploma in Computer Engineering',
    organization: "SVKM's Shri Bhagubhai Mafatlal Polytechnic (SBMP), Mumbai",
    type: 'Education',
    desc: 'Completed full-time 3-year Diploma curriculum in Computer Engineering. Coursework in Data Structures, OOP, OS, MySQL, Software Engineering, and Computer Networks.',
    skills: ['Data Structures', 'OOP', 'SQL', 'OS', 'Networking'],
    icon: GraduationCap,
    accent: 'text-violet-600',
    border: 'border-l-violet-500',
    iconBg: 'bg-violet-100 border-violet-200',
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  {
    period: '2023 – Present',
    role: 'Open Source & Independent Developer',
    organization: 'GitHub (@Rushabh16-9)',
    type: 'Projects',
    desc: 'Created over 17 public repositories spanning AI Smart Wardrobes, Gmail MCP Servers, Flutter Fitness Apps, Wisdom News Readers, and Real-Time Games.',
    skills: ['Next.js', 'Flutter', 'FastAPI', 'MCP', 'Git'],
    icon: Award,
    accent: 'text-sky-600',
    border: 'border-l-sky-500',
    iconBg: 'bg-sky-100 border-sky-200',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14 sm:space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="badge mx-auto"
        >
          <User className="w-3.5 h-3.5" />
          <span>Biography & Timeline</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          About <span className="text-gradient-primary">Rushabh Shah</span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          Full-stack web platforms, mobile apps, and AI document integration developer.
        </p>
      </div>

      {/* Profile Overview & Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 card p-6 sm:p-8 rounded-2xl space-y-5 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-600" />
              <span>Who I Am</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              I am a Computer Engineering graduate from{' '}
              <strong className="text-slate-900">SVKM&apos;s Shri Bhagubhai Mafatlal Polytechnic (SBMP), Mumbai</strong>,
              currently gaining real-world experience as a Full Stack Developer Intern at{' '}
              <strong className="text-indigo-600">Onfees</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              I specialize in combining robust backends in{' '}
              <strong className="text-violet-700">Python and PHP</strong> with fluid frontends in{' '}
              <strong className="text-indigo-700">Next.js</strong>, mobile solutions in{' '}
              <strong className="text-sky-700">Flutter</strong>, and{' '}
              <strong className="text-emerald-700">AI document OCR extraction</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-5 border-t border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Location</span>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">Mumbai, Maharashtra, India</p>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Status</span>
              <p className="text-sm font-semibold text-emerald-600 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Onfees Intern
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 card p-6 sm:p-8 rounded-2xl space-y-4 border-t-4 border-t-violet-500"
        >
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-violet-600" />
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
                desc: 'Ensuring smooth mobile and web user experiences across all devices.',
              },
            ].map((p, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        <div className="text-center">
          <span className="badge">Milestones</span>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">Education & Career Timeline</p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-24 pl-6 sm:pl-10 space-y-8">
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
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-0 w-9 h-9 rounded-full bg-white border-2 ${item.iconBg} flex items-center justify-center shadow-sm`}
                >
                  <Icon className={`w-4 h-4 ${item.accent}`} />
                </div>

                {/* Period Badge */}
                <div className="mb-2">
                  <span className={`text-[10px] sm:text-xs font-medium px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}>
                    {item.period}
                  </span>
                </div>

                {/* Card */}
                <div className={`card p-5 sm:p-7 rounded-2xl border-l-4 ${item.border} space-y-3`}>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900">{item.role}</h3>
                    <p className={`text-xs font-semibold mt-0.5 ${item.accent}`}>{item.organization}</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
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
