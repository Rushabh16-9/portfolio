'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, X, Check } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech_stack: string[];
  github_url: string;
  live_url?: string;
  featured?: boolean;
  highlights: string[];
}

const categories = ['All', 'AI & ML', 'Full Stack Web', 'Mobile Apps', 'Systems & MCP'];

const fallbackProjects: Project[] = [
  {
    id: 'smart-ai-wardrobe',
    title: 'Smart AI Wardrobe',
    description: 'An intelligent fashion & outfit recommendation application powered by AI vision models to catalog clothing items and suggest styled outfits.',
    category: 'AI & ML',
    tech_stack: ['TypeScript', 'Dart', 'Flutter', 'Vision AI', 'Tailwind CSS'],
    github_url: 'https://github.com/Rushabh16-9/smart-ai-wardrobe',
    featured: true,
    highlights: [
      'AI-driven clothing segmentation & category tagger',
      'Cross-platform Flutter mobile & web interface',
      'Automated outfit matching algorithms',
    ],
  },
  {
    id: 'onfees-ai-extraction',
    title: 'Onfees Admission Form AI Extraction',
    description: 'Enterprise-grade automated document parser built during internship at Onfees to extract student admission details from scanned applications using AI OCR.',
    category: 'AI & ML',
    tech_stack: ['TypeScript', 'PHP', 'Python OCR', 'MySQL', 'REST API'],
    github_url: 'https://github.com/Rushabh16-9/onfees-admission-form-AI-based-extraction',
    featured: true,
    highlights: [
      'Accelerated manual document processing by over 80%',
      'Built robust fallback validation for high accuracy',
      'Integrated directly into Onfees core student portal',
    ],
  },
  {
    id: 'gmail-mcp-server',
    title: 'Gmail MCP Server',
    description: 'Model Context Protocol (MCP) Server enabling AI assistants to interact securely with Gmail APIs for message filtering and auto-replies.',
    category: 'Systems & MCP',
    tech_stack: ['Python', 'TypeScript', 'MCP Specification', 'Google APIs'],
    github_url: 'https://github.com/Rushabh16-9/gmail-mcp-server',
    featured: true,
    highlights: [
      'Full compliance with Model Context Protocol standards',
      'Secure OAuth2 token management & scope isolation',
      'Supports search, read, draft, and message dispatching',
    ],
  },
  {
    id: 'fitness-app',
    title: 'Comprehensive Fitness App',
    description: 'Feature-rich mobile fitness companion app for workout tracking, customized meal planning, exercise posture tips, and real-time activity metrics.',
    category: 'Mobile Apps',
    tech_stack: ['Dart', 'Flutter', 'Firebase', 'State Management'],
    github_url: 'https://github.com/Rushabh16-9/fitness-app-new-best-change',
    highlights: [
      'Smooth 60fps responsive Flutter animations',
      'Offline workout logging with automatic cloud sync',
      'Interactive progress charts and calorie trackers',
    ],
  },
  {
    id: 'wisdom-app',
    title: 'Wisdom Bite-Sized News App',
    description: 'An Inshorts-style concise knowledge and news delivery mobile application built with Flutter.',
    category: 'Mobile Apps',
    tech_stack: ['Dart', 'Flutter', 'REST API', 'JSON Parser'],
    github_url: 'https://github.com/Rushabh16-9/wishdom-app-inshorts-',
    highlights: [
      'Swipeable card interface with minimal latency',
      'Category filters: Tech, Business, Science, World',
      'Bookmark and offline reading capabilities',
    ],
  },
  {
    id: 'travel-planner',
    title: 'AI Travel Planner',
    description: 'Interactive web app that designs custom travel itineraries based on destination preferences, budget constraints, and vacation duration.',
    category: 'Full Stack Web',
    tech_stack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'API Integration'],
    github_url: 'https://github.com/Rushabh16-9/travel-planner-',
    highlights: [
      'Interactive destination map & activity timeline',
      'Dynamic budget calculator with breakdown charts',
      'One-click PDF itinerary export',
    ],
  },
  {
    id: 'business-software',
    title: 'Business Enterprise Software Suite',
    description: 'Cross-platform mobile and PC business management solution for inventory, invoice generation, and financial record auditing.',
    category: 'Full Stack Web',
    tech_stack: ['JavaScript', 'HTML5/CSS3', 'Electron', 'Node.js'],
    github_url: 'https://github.com/Rushabh16-9/Business-software-pc',
    highlights: [
      'Unified codebase for PC (Desktop) and Mobile web',
      'Automated PDF bill generator with GST formatting',
      'Local encrypted SQLite storage',
    ],
  },
  {
    id: 'prediction-game',
    title: 'Real-time Prediction Game',
    description: 'Interactive web application featuring real-time odds tracking, user scoreboards, and instant result evaluation.',
    category: 'Full Stack Web',
    tech_stack: ['TypeScript', 'React', 'WebSockets', 'Node.js'],
    github_url: 'https://github.com/Rushabh16-9/prediction-game',
    highlights: [
      'WebSocket integration for live leaderboard updates',
      'Streak tracking and reward badge system',
      'Clean modern UI design',
    ],
  },
];

const categoryColors: Record<string, string> = {
  'AI & ML': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Full Stack Web': 'bg-violet-50 text-violet-700 border-violet-200',
  'Mobile Apps': 'bg-sky-50 text-sky-700 border-sky-200',
  'Systems & MCP': 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const apiBase = typeof window !== 'undefined' && window.location.hostname !== 'localhost' ? '' : 'http://localhost:8000';
    fetch(`${apiBase}/api/projects`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setProjects(data))
      .catch(() => setProjects(fallbackProjects));
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="badge mx-auto"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>GitHub Portfolio (17+ Repositories)</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Featured <span className="text-gradient-primary">Projects</span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Open-source work, full-stack web applications, Flutter mobile apps, and AI OCR tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColors[project.category] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                  >
                    View Highlights
                  </button>

                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-slate-900/20 space-y-5 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryColors[selectedProject.category] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                  {selectedProject.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  Key Technical Highlights
                </h3>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech_stack.map((t) => (
                    <span key={t} className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                <a
                  href={selectedProject.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2 text-sm shadow-md shadow-indigo-200 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
