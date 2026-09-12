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
    description: 'Model Context Protocol (MCP) Server enabling AI assistants (like Claude/Gemini) to interact securely with Gmail APIs for message filtering and auto-replies.',
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
    description: 'An Inshorts-style concise knowledge and news delivery mobile application built with Flutter, presenting curated insights in 60-word card decks.',
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
      'Glassmorphic high-contrast UI design',
    ],
  },
];

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono"
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>GitHub Portfolio (17+ Repositories)</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Featured <span className="text-gradient-cyan">Projects</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-base">
          Open-source work, full-stack web applications, Flutter mobile apps, and AI OCR tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 shadow-md font-bold scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="glass-panel p-5 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-400/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                  >
                    View Highlights
                  </button>

                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-slate-950 border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {selectedProject.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-gray-300 mt-1.5 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
                  Key Technical Highlights
                </h3>
                <div className="space-y-1.5">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech_stack.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                <a
                  href={selectedProject.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 hover:opacity-90 flex items-center gap-1.5 text-xs uppercase tracking-wider"
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
