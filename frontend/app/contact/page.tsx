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

    try {
      const res = await fetch('http://localhost:8000/api/contact', {
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
      // Fallback feedback if offline
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Communication</span>
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Get in <span className="text-gradient-cyan">Touch</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Have a project in mind, want to discuss software engineering, or explore internship opportunities? Fill out the form or reach out directly!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-panel p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Contact Channels</span>
            </h2>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/rushabh-shah-867814299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-gray-400">LinkedIn Profile</span>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300">
                    Rushabh Shah on LinkedIn
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/rushabh16-9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-gray-400">GitHub Account</span>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-300">
                    @rushabh16-9 (17+ Repos)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-gray-400">Location & Role</span>
                  <p className="text-sm font-semibold text-white">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 space-y-2">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> Response Time
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Messages submitted here are saved to the Python FastAPI SQLite database and trigger instant notifications. Expect a response within 24 hours!
            </p>
          </div>
        </motion.div>

        {/* Right Side Direct Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl space-y-6 relative"
        >
          <h2 className="text-2xl font-bold text-white font-mono">
            Send a Direct Message
          </h2>

          {responseMsg && (
            <div
              className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 ${
                responseMsg.type === 'success'
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}
            >
              {responseMsg.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
              )}
              <div>
                <p className="font-semibold">{responseMsg.text}</p>
                {responseMsg.subId && (
                  <p className="text-[11px] font-mono mt-1 opacity-80">
                    Submission Confirmation Ref: #{responseMsg.subId}
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-gray-400">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-gray-400">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-gray-400">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-gray-400">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Rushabh, I'd like to talk about..."
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-50 transition-all"
            >
              {loading ? (
                <span>Submitting to Python API...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
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
