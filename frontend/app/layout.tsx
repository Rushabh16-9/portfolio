import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleCanvas from '@/components/ParticleCanvas';
import AIChatWidget from '@/components/AIChatWidget';

export const metadata: Metadata = {
  title: 'Rushabh Shah - Full Stack & AI Developer Portfolio',
  description: 'Portfolio website of Rushabh Shah, Full Stack & AI Mobile Developer. Diploma CS Student at SVKM’s SBMP & Developer Intern at Onfees.',
  keywords: ['Rushabh Shah', 'Portfolio', 'Full Stack Developer', 'Onfees', 'Next.js', 'Python', 'Flutter', 'AI Developer'],
  authors: [{ name: 'Rushabh Shah', url: 'https://github.com/rushabh16-9' }],
  openGraph: {
    title: 'Rushabh Shah - Full Stack & AI Developer',
    description: 'Explore 17+ projects in Next.js, Python FastAPI, Flutter, and AI document processing.',
    url: 'https://github.com/Rushabh16-9/portfolio',
    siteName: 'Rushabh Shah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07090e] text-slate-100 min-h-screen flex flex-col relative antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
        <ParticleCanvas />
        <Navbar />
        <main className="flex-1 relative z-10 pt-20">
          {children}
        </main>
        <AIChatWidget />
        <Footer />
      </body>
    </html>
  );
}
