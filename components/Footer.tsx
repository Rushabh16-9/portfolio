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
    <footer className="relative z-10 border-t border-slate-200 bg-white text-slate-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white text-sm shadow-sm shadow-indigo-200">
              RS
            </div>
            <span className="font-bold text-lg text-slate-900">
              Rushabh Shah
            </span>
          </div>
          <p className="text-sm text-slate-500 max-w-md leading-relaxed">
            Full Stack Web & AI Mobile Developer. Diploma CS Student at SVKM&apos;s SBMP College & Developer Intern at Onfees.
          </p>
          {/* API Health Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-500">
            <Activity className="w-3.5 h-3.5 text-indigo-500" />
            <span>Python Backend API:</span>
            {apiStatus === 'checking' && <span className="text-amber-500 animate-pulse">Connecting...</span>}
            {apiStatus === 'online' && (
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />Online (FastAPI)
              </span>
            )}
            {apiStatus === 'offline' && <span className="text-red-500">Offline / Standalone</span>}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-indigo-600 transition-colors">Home Overview</Link></li>
            <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About & Experience</Link></li>
            <li><Link href="/projects" className="hover:text-indigo-600 transition-colors">Featured Projects</Link></li>
            <li><Link href="/skills" className="hover:text-indigo-600 transition-colors">Skills Matrix</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Form</Link></li>
          </ul>
        </div>

        {/* Social & Connect */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
            Connect
          </h3>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/rushabh-shah-867814299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-600 transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 text-sky-500" />
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/rushabh16-9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-900 transition-colors group"
            >
              <GithubIcon className="w-4 h-4 text-slate-500" />
              <span>GitHub (17+ Repos)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://github.com/Rushabh16-9/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors group"
            >
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>Portfolio Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© {new Date().getFullYear()} Rushabh Shah. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 animate-pulse" /> using Next.js 14 & Python FastAPI
        </p>
      </div>
    </footer>
  );
}
