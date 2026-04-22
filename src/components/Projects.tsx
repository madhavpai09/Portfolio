'use client';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Trainer-bench',
    subtitle: 'AI Benchmark → RL Training Pipeline',
    problem:
      'Existing AI benchmarks are siloed and incompatible, forcing teams to hand-craft training environments for every new benchmark — making large-scale RL-based agent training slow, brittle, and difficult to reproduce.',
    solution:
      'Designed a modular framework with adapter-based pipelines that ingest diverse benchmarks (ADE-Bench, Deep-Planning, Spider2, BFCL) and normalize them into a unified task format suitable for RL agent training.',
    impact: [
      'Supports 10+ benchmark families with unified task abstraction',
      'Enables curriculum-based task sampling for progressive agent training',
      'Reproducible dataset packaging for scalable experimentation',
      'Laid foundation for full RL training loops with episode & reward hooks',
    ],
    stack: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'RL Infrastructure'],
    featured: true,
  },
  {
    number: '02',
    title: 'Velo',
    subtitle: 'Full-Stack Ride-Booking Platform',
    problem:
      'Parents needed a safe, structured ride-sharing solution for school commutes — something existing platforms never prioritized.',
    solution:
      'Built a production-grade ride-booking platform with real-time scheduling, OpenStreetMap integration, and a School Pool system that handles recurring rides with verified drivers.',
    impact: [
      'OTP-based verification protocol prevents unauthorized trip initiations',
      'School Pool system supports recurring schedules with driver verification',
      'Scalable PostgreSQL data layer handles high-volume ride, user & location data',
      'Real-time map-based ride tracking via OpenStreetMap',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'FastAPI',
      'PostgreSQL',
      'OpenStreetMap',
    ],
    github: 'https://github.com/madhavpai09',
    featured: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const ref = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className="section-animate glass rounded-2xl p-7 card-hover group relative overflow-hidden"
    >
      {/* Gradient accent top-left */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-400/10 transition-all duration-500" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-xs font-mono text-slate-600">{project.number}</span>
              {project.featured && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
          </div>

          <div className="flex gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-100 hover:bg-white/5 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Problem / Solution */}
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div className="space-y-1.5">
            <p className="text-xs font-mono text-slate-600 uppercase tracking-wider">
              Problem
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-mono text-slate-600 uppercase tracking-wider">
              Solution
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-5">
          <p className="text-xs font-mono text-slate-600 uppercase tracking-wider mb-2.5">
            Impact
          </p>
          <ul className="space-y-1.5">
            {project.impact.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-400"
              >
                <ArrowRight
                  size={13}
                  className="text-cyan-400 mt-0.5 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="section-animate mb-12">
          <p className="text-cyan-400 font-mono text-sm mb-2">02 — projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Things I&apos;ve Built
          </h2>
          <p className="text-slate-500 text-sm max-w-lg">
            Selected work — focused on systems that solve real problems. More on{' '}
            <a
              href="https://github.com/madhavpai09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/madhavpai09"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <Github size={15} />
            See all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
