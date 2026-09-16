'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle } from 'lucide-react';

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

const categoryAccents: Record<number, { header: string; bar: string; check: string; icon: string }> = {
  0: { header: 'border-t-indigo-500', bar: 'bg-indigo-500', check: 'text-indigo-500', icon: 'bg-indigo-100 text-indigo-600' },
  1: { header: 'border-t-violet-500', bar: 'bg-violet-500', check: 'text-violet-500', icon: 'bg-violet-100 text-violet-600' },
  2: { header: 'border-t-sky-500', bar: 'bg-sky-500', check: 'text-sky-500', icon: 'bg-sky-100 text-sky-600' },
  3: { header: 'border-t-emerald-500', bar: 'bg-emerald-500', check: 'text-emerald-500', icon: 'bg-emerald-100 text-emerald-600' },
};

export default function Skills() {
  const [categories, setCategories] = useState<Category[]>(fallbackCategories);

  useEffect(() => {
    const apiBase = typeof window !== 'undefined' && window.location.hostname !== 'localhost' ? '' : 'http://localhost:8000';
    fetch(`${apiBase}/api/skills`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setCategories(data))
      .catch(() => setCategories(fallbackCategories));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="badge mx-auto"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Competencies</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Skills & <span className="text-gradient-primary">Proficiency</span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Engineering capabilities across full-stack web, REST APIs, Flutter mobile apps, and AI document systems.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {categories.map((cat, idx) => {
          const accent = categoryAccents[idx] || categoryAccents[0];
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`card p-5 sm:p-7 rounded-2xl space-y-5 border-t-4 ${accent.header}`}
            >
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${accent.icon}`}>
                  <Cpu className="w-4 h-4" />
                </div>
                <h2 className="text-base font-bold text-slate-900">{cat.category}</h2>
              </div>

              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <CheckCircle className={`w-3.5 h-3.5 ${accent.check}`} />
                        {s.name}
                      </span>
                      <span className="font-bold text-slate-500 text-xs">{s.level}%</span>
                    </div>

                    {/* Skill bar */}
                    <div className="skill-track w-full h-2 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-full ${accent.bar}`}
                      />
                    </div>

                    <p className="text-[10px] text-slate-400">
                      <strong className="text-slate-500">Context:</strong> {s.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
