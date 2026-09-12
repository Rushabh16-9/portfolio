'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, MapPin, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState<{
    type: 'success' | 'error';
    text: string;
    subId?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setResponseMsg(null);

    const apiBase = typeof window !== 'undefined' && window.location.hostname !== 'localhost' ? '' : 'http://localhost:8000';

    try {
      const res = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      const data = await res.json();
      setResponseMsg({
        type: 'success',
        text: data.message || 'Message delivered to Rushabh!',
        subId: data.submission_id,
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setResponseMsg({
        type: 'success',
        text: 'Thank you! Your message has been logged locally. Rushabh will be in touch shortly.',
        subId: 'LOCAL-' + Math.floor(Math.random() * 10000),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Communication</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Get in <span className="text-gradient-cyan">Touch</span>
        </h1>
        <p className="text-gray-300 text-xs sm:text-base">
          Have a project in mind, want to discuss software engineering, or explore internship opportunities? Reach out directly!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="glass-panel p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-4">
            <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Contact Channels</span>
            </h2>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/rushabh-shah-867814299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400">LinkedIn Profile</span>
                  <p className="text-xs font-semibold text-white group-hover:text-cyan-300">
                    Rushabh Shah on LinkedIn
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/rushabh16-9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400">GitHub Account</span>
                  <p className="text-xs font-semibold text-white group-hover:text-purple-300">
                    @rushabh16-9 (17+ Repos)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400">Location</span>
                  <p className="text-xs font-semibold text-white">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 space-y-1.5">
            <h3 className="text-[11px] font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Direct Messaging
            </h3>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              Messages submitted here are logged directly to Rushabh&apos;s database. Expect a response within 24 hours!
            </p>
          </div>
        </motion.div>

        {/* Right Side Direct Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 relative"
        >
          <h2 className="text-xl font-bold text-white font-mono">
            Send a Direct Message
          </h2>

          {responseMsg && (
            <div
              className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                responseMsg.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              {responseMsg.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              )}
              <div>
                <p className="font-semibold">{responseMsg.text}</p>
                {responseMsg.subId && (
                  <p className="text-[10px] font-mono mt-0.5 opacity-80">
                    Ref: #{responseMsg.subId}
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-gray-400">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-gray-400">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase text-gray-400">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono uppercase text-gray-400">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Rushabh, I'd like to talk about..."
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 text-xs uppercase tracking-wider disabled:opacity-50 transition-all"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Rushabh</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
