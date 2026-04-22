'use client';
import { Github, Linkedin, ArrowDown, Mail } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

const roles = [
  'AI Systems Builder',
  'Full-Stack Developer',
  'Backend Architect',
  'CS & Business @ BMSCE',
];

const stats = [
  { label: 'CGPA', value: '9.4' },
  { label: 'Current Role', value: 'AI Intern' },
  { label: 'Stack', value: 'Full-Stack' },
  { label: 'Status', value: 'Open to Work' },
];

export default function Hero() {
  const typed = useTypewriter(roles, 75, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #1e1e2e 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-400/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-mono mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for full-time & internship roles
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-slate-100">J </span>
          <span className="gradient-text">Madhav Pai</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl font-mono text-slate-400">
            {typed}
            <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 align-middle animate-blink" />
          </p>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          I build systems that{' '}
          <span className="text-slate-200 font-medium">think, scale, and ship</span> — from
          RL training pipelines for agentic AI to full-stack products with real-world
          impact.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={15} />
          </a>
          <a
            href="https://github.com/madhavpai09"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github size={15} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jmadhavpai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
          <a href="mailto:jmadhavpai@gmail.com" className="btn-ghost">
            <Mail size={15} />
            Email
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-4 text-center hover:border-cyan-400/20 transition-all duration-300"
            >
              <div className="text-lg font-bold gradient-text-cyan">{s.value}</div>
              <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <ArrowDown size={16} className="animate-bounce group-hover:text-cyan-400" />
      </a>
    </section>
  );
}
