'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Code2, Server, Smartphone, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { useRef } from 'react';

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="space-y-20 sm:space-y-32 pb-16 sm:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="hero-bg relative pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex flex-col items-center justify-center text-center">
        <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto flex flex-col items-center z-10">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="badge mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Full Stack Developer Intern @ Onfees
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: 'spring' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1]"
          >
            Crafting Intelligent{' '}
            <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Full Stack & AI Applications</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-500 max-w-2xl leading-relaxed"
          >
            Hi, I&apos;m{' '}
            <span className="text-slate-900 font-semibold underline decoration-indigo-400 decoration-2 underline-offset-4">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/projects" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <span>Explore 17+ Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </Link>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#f1f5f9' }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rushabh16-9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 flex items-center justify-center gap-2 transition-colors text-sm shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#f0f9ff' }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/rushabh-shah-867814299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-6 py-3.5 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 flex items-center justify-center gap-2 transition-colors text-sm shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-600" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`card p-5 sm:p-7 rounded-3xl flex flex-col items-center justify-center text-center border bg-white/60 backdrop-blur-sm ${item.bg}`}
              >
                <span className={`text-3xl sm:text-4xl font-extrabold mb-1 ${item.accent}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {item.value}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Expertise Domains */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="badge">Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            Development Domains
          </h2>
          <p className="text-base text-slate-500 mt-3 max-w-2xl mx-auto">Areas where I build real-world products and scalable infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Full-Stack Web',
              icon: Code2,
              desc: 'Building responsive Next.js 14 & React interfaces with Tailwind CSS.',
              tech: 'Next.js · TypeScript · React',
              accent: 'text-indigo-600',
              iconBg: 'bg-indigo-100',
              border: 'border-t-4 border-t-indigo-500',
            },
            {
              title: 'Backend APIs',
              icon: Server,
              desc: 'High-throughput REST endpoints and SQL database management.',
              tech: 'FastAPI · Python · PHP · MySQL',
              accent: 'text-violet-600',
              iconBg: 'bg-violet-100',
              border: 'border-t-4 border-t-violet-500',
            },
            {
              title: 'Mobile Applications',
              icon: Smartphone,
              desc: 'Crafting cross-platform mobile experiences for Android & iOS.',
              tech: 'Flutter · Dart · Firebase',
              accent: 'text-sky-600',
              iconBg: 'bg-sky-100',
              border: 'border-t-4 border-t-sky-500',
            },
            {
              title: 'AI & Systems',
              icon: Cpu,
              desc: 'Integrating AI document OCR parsing and Model Context Protocol servers.',
              tech: 'AI OCR · Vision AI · MCP Spec',
              accent: 'text-emerald-600',
              iconBg: 'bg-emerald-100',
              border: 'border-t-4 border-t-emerald-500',
            },
          ].map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.03, y: -8 }}
                className={`card p-6 sm:p-8 rounded-3xl flex flex-col justify-between ${domain.border} bg-white shadow-sm hover:shadow-xl`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${domain.iconBg}`}>
                    <Icon className={`w-6 h-6 ${domain.accent}`} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">{domain.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{domain.desc}</p>
                </div>
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">{domain.tech}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="badge">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">Featured Work</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group bg-indigo-50 px-4 py-2 rounded-full transition-colors"
          >
            <span>View All 17+ Repositories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, type: 'spring' }}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-t-4 ${proj.accent} bg-white hover:shadow-xl`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-3 py-1 bg-slate-100 rounded-full">
                  {proj.category}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-4 mb-3 group-hover:text-indigo-700 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {proj.desc}
                </p>
              </div>

              <div className="mt-6 space-y-4 pt-5 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 p-8 sm:p-14 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-200/80 overflow-hidden relative"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-indigo-400 opacity-20 blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-left relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to start your next project?
            </h2>
            <p className="text-indigo-100 text-base sm:text-lg max-w-xl">
              Let&apos;s build full-stack web, mobile, or AI products together.
            </p>
          </div>
          <Link href="/contact" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-indigo-700 bg-white hover:bg-indigo-50 flex items-center justify-center gap-2 text-base shadow-xl transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Contact Rushabh</span>
            </motion.a>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
