'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Heart, Terminal, Activity, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Footer() {
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    const apiBase = typeof window !== 'undefined' && window.location.hostname !== 'localhost' ? '' : 'http://localhost:8000';
    fetch(`${apiBase}/api/health`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(() => setApiStatus('online'))
      .catch(() => setApiStatus('offline'));
  }, []);

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-slate-950 font-mono text-sm">
              RS
            </div>
            <span className="font-bold text-xl text-white font-mono">
              Rushabh Shah
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Full Stack Web & AI Mobile Developer. Diploma CS Student at SVKM’s SBMP College & Developer Intern at Onfees. Passioned by clean architectures, AI integrations, and high-performance apps.
          </p>
          {/* API Health Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Python Backend API:</span>
            {apiStatus === 'checking' && <span className="text-yellow-400 animate-pulse">Connecting...</span>}
            {apiStatus === 'online' && <span className="text-emerald-400 font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />Online (FastAPI)</span>}
            {apiStatus === 'offline' && <span className="text-rose-400">Offline / Standalone</span>}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home Overview</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About & Experience</Link></li>
            <li><Link href="/projects" className="hover:text-cyan-400 transition-colors">Featured Projects</Link></li>
            <li><Link href="/skills" className="hover:text-cyan-400 transition-colors">Skills Matrix</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Form</Link></li>
          </ul>
        </div>

        {/* Social & Connect */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-mono">
            Connect
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/rushabh-shah-867814299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/rushabh16-9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <GithubIcon className="w-4 h-4 text-purple-400" />
              <span>GitHub Account (17+ Repos)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/Rushabh16-9/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Portfolio Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Rushabh Shah. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> using Next.js 14 & Python FastAPI
        </p>
      </div>
    </footer>
  );
}
