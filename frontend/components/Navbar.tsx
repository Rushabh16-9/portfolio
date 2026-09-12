'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, Code2, User, FolderGit2, Cpu, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/', icon: Code2 },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: FolderGit2 },
  { name: 'Skills', href: '/skills', icon: Cpu },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-cyan-400 font-mono text-lg group-hover:bg-slate-900 transition-colors">
              RS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white font-mono tracking-tight flex items-center gap-1">
              Rushabh<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest font-sans uppercase">
              Full Stack & AI Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Glitch Free Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.2)]'
                    : 'text-gray-400 hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : ''}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-transform"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-6"
          >
            <div className="flex flex-col gap-2 mt-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-400"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
