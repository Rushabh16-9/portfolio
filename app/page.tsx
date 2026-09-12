'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Code2, Server, Smartphone, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const stats = [
  { label: 'GitHub Repos', value: '17+', color: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  { label: 'Current Role', value: 'Onfees Intern', color: 'text-purple-400', glow: 'shadow-purple-500/20' },
  { label: 'Education', value: 'Diploma CS', color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  { label: 'Domains', value: 'Web, AI, Mobile', color: 'text-amber-400', glow: 'shadow-amber-500/20' },
];

const featuredProjects = [
  {
    title: 'Smart AI Wardrobe',
    category: 'AI & Mobile',
    desc: 'Intelligent outfit recommendation and cataloging platform utilizing vision AI models and Flutter.',
    tags: ['TypeScript', 'Flutter', 'Dart', 'Vision AI'],
    github: 'https://github.com/Rushabh16-9/smart-ai-wardrobe',
    gradient: 'from-cyan-500/20 to-indigo-500/20 border-cyan-500/30',
  },
  {
    title: 'Onfees Admission Form AI Extraction',
    category: 'AI & Full Stack',
    desc: 'Enterprise document parser created during internship at Onfees to automate student admission processing with AI OCR.',
    tags: ['PHP', 'TypeScript', 'Python OCR', 'MySQL'],
    github: 'https://github.com/Rushabh16-9/onfees-admission-form-AI-based-extraction',
    gradient: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  },
  {
    title: 'Gmail MCP Server',
    category: 'Systems & AI',
    desc: 'Model Context Protocol (MCP) server enabling LLMs to securely automate Gmail workflows.',
    tags: ['Python', 'MCP Spec', 'OAuth2', 'API'],
    github: 'https://github.com/Rushabh16-9/gmail-mcp-server',
    gradient: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
  },
];

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-12 sm:pb-20">
      {/* Hero Section */}
      <section className="relative pt-4 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,245,255,0.12)] mb-4 sm:mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono text-cyan-300 font-medium tracking-tight">
            Full Stack Developer Intern @ Onfees
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight"
        >
          Crafting Intelligent <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Full Stack & AI Applications</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-6 text-sm sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
        >
          Hi, I&apos;m <span className="text-white font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4">Rushabh Shah</span>. 
          Computer Engineering Diploma student building robust web backends with <span className="text-cyan-400 font-medium">Next.js & Python</span>, 
          enterprise portals with <span className="text-purple-400 font-medium">PHP</span>, and mobile apps with <span className="text-emerald-400 font-medium">Flutter</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider"
          >
            <span>Explore 17+ Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <a
              href="https://github.com/rushabh16-9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider"
            >
              <GithubIcon className="w-4 h-4 text-purple-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rushabh-shah-867814299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center gap-2 transition-all text-xs uppercase tracking-wider"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Compact Mobile Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 w-full"
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className={`glass-panel p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center shadow-md ${item.glow}`}
            >
              <span className={`text-2xl sm:text-4xl font-extrabold font-mono mb-0.5 ${item.color}`}>
                {item.value}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-mono">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Expertise Domains */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">
            Capabilities
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Development Domains
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Full-Stack Web',
              icon: Code2,
              desc: 'Building responsive Next.js 14 & React interfaces with Tailwind CSS.',
              tech: 'Next.js, TypeScript, React',
              color: 'text-cyan-400',
              bg: 'bg-cyan-500/10 border-cyan-500/20',
            },
            {
              title: 'Backend APIs',
              icon: Server,
              desc: 'High-throughput REST endpoints and SQL database management.',
              tech: 'FastAPI, Python, PHP, MySQL',
              color: 'text-purple-400',
              bg: 'bg-purple-500/10 border-purple-500/20',
            },
            {
              title: 'Mobile Applications',
              icon: Smartphone,
              desc: 'Crafting cross-platform mobile experiences for Android & iOS.',
              tech: 'Flutter, Dart, Firebase',
              color: 'text-emerald-400',
              bg: 'bg-emerald-500/10 border-emerald-500/20',
            },
            {
              title: 'AI & Systems',
              icon: Cpu,
              desc: 'Integrating AI document OCR parsing and Model Context Protocol servers.',
              tech: 'AI OCR, Vision AI, MCP Spec',
              color: 'text-amber-400',
              bg: 'bg-amber-500/10 border-amber-500/20',
            },
          ].map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-5 rounded-2xl sm:rounded-3xl border ${domain.bg} backdrop-blur-xl flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${domain.bg}`}>
                    <Icon className={`w-5 h-5 ${domain.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{domain.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{domain.desc}</p>
                </div>
                <div className="pt-2.5 border-t border-white/10">
                  <span className="text-[10px] font-mono text-cyan-300">{domain.tech}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-10 gap-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-purple-400 font-mono">
              Portfolio
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white mt-0.5">Featured Work</p>
          </div>
          <Link
            href="/projects"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group"
          >
            <span>View All 17+ Repositories</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-panel p-5 sm:p-6 rounded-2xl sm:rounded-3xl border bg-gradient-to-b ${proj.gradient} flex flex-col justify-between group`}
            >
              <div>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-cyan-300 font-semibold tracking-wider">
                  {proj.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-3 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-5 space-y-3 pt-3 border-t border-white/10">
                <div className="flex flex-wrap gap-1">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-400 transition-colors pt-1"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile-Compact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-950 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              Interested in collaborating or hiring?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Let&apos;s build full-stack web, mobile, or AI products together.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 relative z-10"
          >
            <Sparkles className="w-4 h-4" />
            <span>Contact Rushabh</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
