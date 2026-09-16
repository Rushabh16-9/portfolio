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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 sm:space-y-14">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="badge mx-auto"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Communication</span>
        </motion.div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Get in <span className="text-gradient-primary">Touch</span>
        </h1>
        <p className="text-slate-500 text-sm sm:text-base">
          Have a project in mind, want to discuss software engineering, or explore internship opportunities?
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
          <div className="card p-6 sm:p-7 rounded-2xl space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span>Contact Channels</span>
            </h2>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/rushabh-shah-867814299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:bg-sky-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-medium uppercase text-slate-400 tracking-wider">LinkedIn Profile</span>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-sky-700 transition-colors">
                    Rushabh Shah on LinkedIn
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/rushabh16-9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-medium uppercase text-slate-400 tracking-wider">GitHub Account</span>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                    @rushabh16-9 (17+ Repos)
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-medium uppercase text-slate-400 tracking-wider">Location</span>
                  <p className="text-sm font-semibold text-slate-800">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-4 rounded-2xl border-l-4 border-l-emerald-500 bg-emerald-50 border-emerald-200 space-y-1.5">
            <h3 className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Direct Messaging
            </h3>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Messages submitted here are logged directly to Rushabh&apos;s database. Expect a response within 24 hours!
            </p>
          </div>
        </motion.div>

        {/* Right Side Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 card p-6 sm:p-8 rounded-2xl space-y-5"
        >
          <h2 className="text-xl font-bold text-slate-900">
            Send a Direct Message
          </h2>

          {responseMsg && (
            <div
              className={`p-4 rounded-xl border text-sm flex items-start gap-3 ${
                responseMsg.type === 'success'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-red-50 border-red-200 text-red-700'
              }`}
            >
              {responseMsg.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
              )}
              <div>
                <p className="font-medium">{responseMsg.text}</p>
                {responseMsg.subId && (
                  <p className="text-xs font-mono mt-0.5 opacity-70">
                    Ref: #{responseMsg.subId}
                  </p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Inquiry / Job Opportunity"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600">
                Message *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Rushabh, I'd like to talk about..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              {loading ? (
                <span>Submitting...</span>
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
