'use client';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  url?: string;
  bullets: string[];
  tags: string[];
}

const experience: Job[] = [
  {
    role: 'AI Engineer Intern',
    company: 'Cynepia Technologies',
    location: 'Bangalore, India',
    period: 'Jan 2026 – Present',
    type: 'Internship',
    bullets: [
      'Designed Trainer-bench — a modular framework that converts AI benchmarks into trainable environments for agentic RL models, enabling reproducible multi-benchmark experimentation.',
      'Built adapter-based ingestion pipelines for heterogeneous benchmarks (ADE-Bench, Deep-Planning, Spider2, BFCL), normalizing them into a unified task format.',
      'Abstracted task instructions, environment state (databases, tools), and metadata to support reinforcement learning–based agent training loops.',
      'Implemented task validation, reproducible dataset packaging, and environment configuration for scalable experimentation.',
      'Laid groundwork for RL training infrastructure including episode definitions, reward hooks, and curriculum-based task sampling.',
    ],
    tags: ['Python', 'RL Infrastructure', 'AI Benchmarks', 'FastAPI', 'Docker'],
  },
];

export default function Experience() {
  const headingRef = useScrollAnimation<HTMLDivElement>(0.1);
  const cardRef = useScrollAnimation<HTMLDivElement>(0.1, 150);

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="section-animate mb-12">
          <p className="text-cyan-400 font-mono text-sm mb-2">04 — experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Where I&apos;ve Worked
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-violet-400/20 to-transparent ml-4 hidden sm:block" />

          <div className="space-y-8 sm:pl-14">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                ref={cardRef}
                className="section-animate relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[3.35rem] top-6 w-3 h-3 rounded-full bg-cyan-400 glow-cyan hidden sm:block" />

                <div className="glass rounded-2xl p-7 card-hover group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                          {job.role}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-400/10 text-violet-400 border border-violet-400/20">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5 font-medium text-slate-300">
                          {job.url ? (
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                            >
                              {job.company}
                              <ExternalLink size={11} />
                            </a>
                          ) : (
                            job.company
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-slate-500 shrink-0">
                      <Calendar size={13} />
                      {job.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
