'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Server, Smartphone, Wrench, CheckCircle } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  highlight: string;
}

interface Category {
  category: string;
  icon: string;
  skills: Skill[];
}

const fallbackCategories: Category[] = [
  {
    category: 'Frontend & Web UI',
    icon: 'Code2',
    skills: [
      { name: 'React.js / Next.js 14', level: 92, highlight: 'App Router, SSR, Server Components' },
      { name: 'TypeScript & JavaScript', level: 90, highlight: 'ES6+, Async, Static Typing' },
      { name: 'Tailwind CSS & Styling', level: 95, highlight: 'Glassmorphism, Animations, Responsive UI' },
      { name: 'HTML5 / CSS3', level: 95, highlight: 'Semantic Tags, Flexbox, Grid, Canvas' },
    ],
  },
  {
    category: 'Backend & Cloud APIs',
    icon: 'Server',
    skills: [
      { name: 'Python (FastAPI / Flask)', level: 88, highlight: 'Async APIs, Pydantic, Uvicorn' },
      { name: 'PHP & Web Frameworks', level: 85, highlight: 'Onfees enterprise portal, REST endpoints' },
      { name: 'Node.js & Express', level: 82, highlight: 'RESTful services, Middleware, Auth' },
      { name: 'SQL & Databases', level: 85, highlight: 'MySQL, SQLite, Query optimization' },
    ],
  },
  {
    category: 'Mobile App Development',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter & Dart', level: 86, highlight: 'Fitness, Wardrobe, Wisdom app projects' },
      { name: 'Cross-Platform UI', level: 88, highlight: 'Android & iOS unified codebases' },
      { name: 'State Management', level: 84, highlight: 'Provider, Riverpod, BLoC fundamentals' },
    ],
  },
  {
    category: 'AI, ML & Tooling',
    icon: 'Cpu',
    skills: [
      { name: 'AI Document Extraction', level: 88, highlight: 'OCR, Form parsing at Onfees' },
      { name: 'MCP (Model Context Protocol)', level: 85, highlight: 'Built Gmail MCP Server for AI assistants' },
      { name: 'Git & GitHub Workflow', level: 92, highlight: '17+ Repositories, Version Control' },
      { name: 'Linux & CLI Utilities', level: 82, highlight: 'Shell scripting, deployment commands' },
    ],
  },
];

export default function Skills() {
  const [categories, setCategories] = useState<Category[]>(fallbackCategories);

  useEffect(() => {
    fetch('http://localhost:8000/api/skills')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setCategories(data))
      .catch(() => setCategories(fallbackCategories));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Competencies</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Skills & <span className="text-gradient-cyan">Proficiency</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          A comprehensive breakdown of my engineering capabilities across full-stack web, backend REST APIs, cross-platform mobile apps, and AI document systems.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 hover:border-cyan-400/40 transition-colors"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white font-mono">{cat.category}</h2>
            </div>

            <div className="space-y-6">
              {cat.skills.map((s) => (
                <div key={s.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {s.name}
                    </span>
                    <span className="font-mono text-xs text-cyan-300 font-bold">{s.level}%</span>
                  </div>

                  {/* Meter bar */}
                  <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500"
                    />
                  </div>

                  <p className="text-[11px] font-mono text-gray-400">
                    <strong className="text-gray-500">Real-world Context:</strong> {s.highlight}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
