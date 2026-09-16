'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: string[];
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi! I'm **Rushabh's AI Portfolio Assistant**. Ask me about Rushabh's **Computer Engineering Diploma** at **SVKM's SBMP**, his **Onfees Internship**, or his **17+ GitHub projects**!",
      actions: ['Education at SBMP', 'Onfees Internship', 'Featured Projects', 'How to Contact?'],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const formatText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      let content = line;

      const linkRegex = /\[(.*?)\]\((.*?)\)/g;
      const parts: (string | JSX.Element)[] = [];
      let lastIdx = 0;
      let match;

      while ((match = linkRegex.exec(content)) !== null) {
        if (match.index > lastIdx) {
          parts.push(content.substring(lastIdx, match.index));
        }
        parts.push(
          <a
            key={match.index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 underline font-semibold"
          >
            {match[1]}
          </a>
        );
        lastIdx = linkRegex.lastIndex;
      }
      if (lastIdx < content.length) {
        parts.push(content.substring(lastIdx));
      }

      const renderedParts = parts.map((part, pIdx) => {
        if (typeof part !== 'string') return part;
        const boldParts = part.split(/\*\*(.*?)\*\*/g);
        return boldParts.map((bPart, bIdx) => {
          if (bIdx % 2 === 1) {
            return <strong key={bIdx} className="font-bold text-slate-900">{bPart}</strong>;
          }
          return bPart;
        });
      });

      return (
        <div key={lIdx} className={line.startsWith('- ') ? 'ml-2 list-disc' : 'my-0.5'}>
          {renderedParts}
        </div>
      );
    });
  };

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput('');
    setLoading(true);

    const apiBase = typeof window !== 'undefined' && window.location.hostname !== 'localhost' ? '' : 'http://localhost:8000';

    try {
      const res = await fetch(`${apiBase}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!res.ok) throw new Error('API Error');

      const data = await res.json();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply,
        actions: data.suggested_actions,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Rushabh Shah completed his **Diploma in Computer Engineering** at **SVKM's SBMP** and is a Full Stack Developer intern at **Onfees**. He has 17+ projects in Next.js, Python, PHP, and Flutter.`,
        actions: ['Projects', 'Skills', 'Contact'],
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transform-gpu">
      {/* Trigger Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-300/60 text-white transition-colors"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
          <span className="absolute top-0 right-0 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[92vw] sm:w-[380px] h-[460px] sm:h-[510px] bg-white border border-slate-200 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/15 flex flex-col overflow-hidden transform-gpu"
          >
            {/* Header */}
            <div className="p-3.5 bg-indigo-600 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-xs sm:text-sm flex items-center gap-1">
                    Rushabh AI <Sparkles className="w-3 h-3 text-indigo-200" />
                  </h3>
                  <p className="text-[10px] text-indigo-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-indigo-200 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-3 overflow-y-auto space-y-3 text-xs bg-slate-50">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    m.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-xl px-3.5 py-2.5 leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-indigo-600 text-white font-medium rounded-tr-none shadow-sm'
                        : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {formatText(m.text)}
                  </div>

                  {m.actions && m.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5 max-w-[95%]">
                      {m.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(act)}
                          className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-all"
                        >
                          ⚡ {act}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-1.5 text-[11px] text-indigo-600 bg-indigo-50 p-2.5 rounded-xl border border-indigo-200 w-fit">
                  <Sparkles className="w-3 h-3 animate-spin" />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-2.5 border-t border-slate-200 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-1.5"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about education, Onfees, skills..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
