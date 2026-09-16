'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Code2, Server, Smartphone, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const stats = [
  { label: 'GitHub Repos', value: '17+', accent: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
  { label: 'Current Role', value: 'Onfees Intern', accent: 'text-violet-600', bg: 'bg-violet-50 border-violet-200' },
  { label: 'Education', value: '2nd Year CS', accent: 'text-sky-600', bg: 'bg-sky-50 border-sky-200' },
  { label: 'Domains', value: 'Web, AI, Mobile', accent: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
];

const featuredProjects = [
  {
    title: 'Smart AI Wardrobe',
    category: 'AI & Mobile',
    desc: 'Intelligent outfit recommendation and cataloging platform utilizing vision AI models and Flutter.',
    tags: ['TypeScript', 'Flutter', 'Dart', 'Vision AI'],
    github: 'https://github.com/Rushabh16-9/smart-ai-wardrobe',
    accent: 'border-t-indigo-500',
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Onfees Admission Form AI Extraction',
    category: 'AI & Full Stack',
    desc: 'Enterprise document parser created during internship at Onfees to automate student admission processing with AI OCR.',
    tags: ['PHP', 'TypeScript', 'Python OCR', 'MySQL'],
    github: 'https://github.com/Rushabh16-9/onfees-admission-form-AI-based-extraction',
    accent: 'border-t-violet-500',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    title: 'Gmail MCP Server',
    category: 'Systems & AI',
    desc: 'Model Context Protocol (MCP) server enabling LLMs to securely automate Gmail workflows.',
    tags: ['Python', 'MCP Spec', 'OAuth2', 'API'],
    github: 'https://github.com/Rushabh16-9/gmail-mcp-server',
    accent: 'border-t-sky-500',
    iconBg: 'bg-sky-100 text-sky-600',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24">
      {/* Hero Section */}
      <section className="hero-bg relative pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="badge mb-5 sm:mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Full Stack Developer Intern @ Onfees
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-tight"
        >
          Crafting Intelligent{' '}
          <br className="hidden sm:inline" />
          <span className="text-gradient-primary">Full Stack & AI Applications</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-500 max-w-2xl leading-relaxed"
        >
          Hi, I&apos;m{' '}
          <span className="text-slate-800 font-semibold underline decoration-indigo-400 decoration-2 underline-offset-4">
            Rushabh Shah
          </span>
          . Computer Engineering Diploma student building robust web backends with{' '}
          <span className="text-indigo-600 font-medium">Next.js & Python</span>,
          enterprise portals with{' '}
          <span className="text-violet-600 font-medium">PHP</span>, and mobile apps with{' '}
          <span className="text-sky-600 font-medium">Flutter</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto"
        >
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 transition-all text-sm"
          >
            <span>Explore 17+ Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <a
              href="https://github.com/rushabh16-9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-2 transition-all text-sm shadow-sm"
            >
              <GithubIcon className="w-4 h-4 text-slate-600" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rushabh-shah-867814299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center gap-2 transition-all text-sm shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-600" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full"
        >
          {stats.map((item, i) => (
            <div
              key={i}
              className={`card p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center border ${item.bg}`}
            >
              <span className={`text-2xl sm:text-4xl font-extrabold mb-0.5 ${item.accent}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {item.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Expertise Domains */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="badge">Capabilities</span>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3">
            Development Domains
          </p>
          <p className="text-sm text-slate-500 mt-2">Areas where I build real-world products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Full-Stack Web',
              icon: Code2,
              desc: 'Building responsive Next.js 14 & React interfaces with Tailwind CSS.',
              tech: 'Next.js · TypeScript · React',
              accent: 'text-indigo-600',
              iconBg: 'bg-indigo-100',
              border: 'border-t-2 border-t-indigo-400',
            },
            {
              title: 'Backend APIs',
              icon: Server,
              desc: 'High-throughput REST endpoints and SQL database management.',
              tech: 'FastAPI · Python · PHP · MySQL',
              accent: 'text-violet-600',
              iconBg: 'bg-violet-100',
              border: 'border-t-2 border-t-violet-400',
            },
            {
              title: 'Mobile Applications',
              icon: Smartphone,
              desc: 'Crafting cross-platform mobile experiences for Android & iOS.',
              tech: 'Flutter · Dart · Firebase',
              accent: 'text-sky-600',
              iconBg: 'bg-sky-100',
              border: 'border-t-2 border-t-sky-400',
            },
            {
              title: 'AI & Systems',
              icon: Cpu,
              desc: 'Integrating AI document OCR parsing and Model Context Protocol servers.',
              tech: 'AI OCR · Vision AI · MCP Spec',
              accent: 'text-emerald-600',
              iconBg: 'bg-emerald-100',
              border: 'border-t-2 border-t-emerald-400',
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
                className={`card p-5 sm:p-6 rounded-2xl flex flex-col justify-between ${domain.border}`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${domain.iconBg}`}>
                    <Icon className={`w-5 h-5 ${domain.accent}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{domain.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{domain.desc}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100">
                  <span className="text-[10px] font-medium text-slate-400 tracking-wide">{domain.tech}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-10 gap-2">
          <div>
            <span className="badge">Portfolio</span>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">Featured Work</p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
          >
            <span>View All 17+ Repositories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border-t-4 ${proj.accent}`}
            >
              <div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 px-2.5 py-1 bg-slate-100 rounded-full">
                  {proj.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-3 mb-2 group-hover:text-indigo-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-5 space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-200/60">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-3xl font-extrabold text-white">
              Interested in collaborating or hiring?
            </h2>
            <p className="text-indigo-200 text-sm max-w-xl">
              Let&apos;s build full-stack web, mobile, or AI products together.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-indigo-700 bg-white hover:bg-indigo-50 flex items-center justify-center gap-2 text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Contact Rushabh</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
