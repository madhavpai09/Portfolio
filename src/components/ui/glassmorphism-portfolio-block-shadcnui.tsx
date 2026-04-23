'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Cpu,
  Download,
} from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

type Highlight = {
  title: string;
  description: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
  external: boolean;
};

const highlights: Highlight[] = [
  {
    title: 'Current Role',
    description:
      'AI Engineer Intern at Cynepia Technologies — building Trainer-bench, a modular framework that converts AI benchmarks into RL training environments for agentic models.',
  },
  {
    title: 'Featured Build',
    description:
      'Velo — a full-stack ride-booking platform with OTP-based ride verification, School Pool scheduling, and real-time OpenStreetMap tracking.',
  },
  {
    title: 'Availability',
    description:
      'Open to full-time SDE & AI roles · Based in Bangalore, India · Open to remote & relocation.',
  },
];

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: 'madhavpai09',
    href: 'https://github.com/madhavpai09',
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/jmadhavpai',
    href: 'https://linkedin.com/in/jmadhavpai',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Email',
    handle: 'jmadhavpai@gmail.com',
    href: 'mailto:jmadhavpai@gmail.com',
    icon: Mail,
    external: false,
  },
];

const roles = [
  'AI Systems Builder',
  'Full-Stack Developer',
  'Backend Architect',
  'RL Pipeline Engineer',
];

const stats = [
  { value: '9.4', label: 'CGPA' },
  { value: 'AI', label: 'Intern @ Cynepia' },
  { value: 'FS', label: 'Full-Stack' },
  { value: '✓', label: 'Open to Work' },
];

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function GlassmorphismPortfolioBlock() {
  const typed = useTypewriter(roles, 75, 2000);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-24 lg:py-20"
    >
      {/* ── Background: dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, #1e1e2e 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Background: radial glows ── */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-violet-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* ── Top badge + typewriter ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center gap-3 text-center"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 rounded-full border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-cyan-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </Badge>

          <div className="h-8 flex items-center gap-1.5">
            <span className="font-mono text-lg text-slate-400">{typed}</span>
            <span className="inline-block w-0.5 h-5 bg-cyan-400 animate-blink" />
          </div>
        </motion.div>

        {/* ── Glass card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-2xl md:p-12"
        >
          {/* Inner glass gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent" />
          {/* Cyan corner glow */}
          <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-violet-400/8 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">

            {/* ── Left: name, bio, highlights, CTAs ── */}
            <div className="space-y-7">
              <div className="space-y-3">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
                >
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    J Madhav Pai
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="text-base leading-relaxed text-foreground/65 max-w-lg"
                >
                  Third-year{' '}
                  <span className="text-foreground/90 font-medium">
                    CS & Business Systems
                  </span>{' '}
                  student at BMSCE Bangalore with a{' '}
                  <span className="text-cyan-400 font-medium">9.4 CGPA</span>.
                  Currently building AI training infrastructure at{' '}
                  <span className="text-foreground/90 font-medium">
                    Cynepia Technologies
                  </span>{' '}
                  — bridging benchmark datasets and RL environments for agentic
                  models.
                </motion.p>
              </div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="grid gap-3"
              >
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur transition-all hover:border-cyan-400/20 hover:shadow-lg hover:shadow-black/20"
                  >
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/65">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                <Button
                  size="lg"
                  asChild
                  className="h-11 gap-2 rounded-full px-7 text-xs uppercase tracking-[0.2em] transition-all hover:shadow-lg hover:shadow-cyan-400/10"
                >
                  <a href="#projects">
                    View Projects
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-11 gap-2 rounded-full px-7 text-xs uppercase tracking-[0.2em] border-white/10 hover:border-cyan-400/30 hover:text-cyan-400"
                >
                  <a
                    href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/MadhavPai_Resume.pdf`}
                    download
                  >
                    <Download className="h-3.5 w-3.5" />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* ── Right: profile card + social links ── */}
            <div className="relative flex flex-col">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-cyan-400/10 via-transparent to-violet-400/5 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-7 backdrop-blur-xl">

                {/* Avatar + name */}
                <div className="flex flex-col items-center text-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
                    className="relative"
                  >
                    <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-2xl" />
                    <div className="relative h-24 w-24 rounded-full border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/badge.jpg`}
                        alt="Madhav Pai"
                        className="h-full w-full object-cover"
                        />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 }}
                  >
                    <h2 className="text-xl font-bold tracking-tight text-foreground">
                      J Madhav Pai
                    </h2>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-foreground/40 mt-0.5">
                      AI Engineer · Full-Stack Dev
                    </p>
                  </motion.div>

                  {/* Stat pills */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.55 }}
                    className="flex flex-wrap justify-center gap-2"
                  >
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-col items-center rounded-xl border border-cyan-400/15 bg-cyan-400/5 px-3 py-2 min-w-[56px]"
                      >
                        <span className="text-sm font-bold text-cyan-400">
                          {s.value}
                        </span>
                        <span className="text-[9px] text-slate-500 mt-0.5 leading-tight text-center">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Social links */}
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-6 flex flex-col gap-2.5"
                >
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        variants={itemVariants}
                        href={social.href}
                        target={social.external ? '_blank' : undefined}
                        rel={social.external ? 'noopener noreferrer' : undefined}
                        className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:shadow-md"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-foreground/70 transition-all group-hover:text-cyan-400">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {social.label}
                            </p>
                            <p className="text-xs text-foreground/50 truncate max-w-[160px]">
                              {social.handle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Stats strip below card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { label: 'Degree', value: 'CS & Business Systems' },
            { label: 'College', value: 'BMSCE Bangalore' },
            { label: 'CGPA', value: '9.4 / 10' },
            { label: 'Location', value: 'Bangalore, India' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-center"
            >
              <p className="text-xs text-slate-600 mb-0.5">{item.label}</p>
              <p className="text-sm font-medium text-slate-300">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 hover:text-slate-400 transition-colors group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} className="animate-bounce group-hover:text-cyan-400" />
      </motion.a>
    </section>
  );
}
