'use client';
import { GraduationCap, Cpu, Globe, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    institution: 'B.M.S College of Engineering',
    degree: 'BE in Computer Science & Business Systems',
    period: '2023 – Present',
    score: '9.4 / 10 CGPA',
    location: 'Bangalore, India',
  },
  {
    institution: 'Poornaprajna PU College',
    degree: 'Class 12 — PCMC',
    period: '2021 – 2023',
    score: '92.80%',
    location: 'Udupi, India',
  },
  {
    institution: "St. Mary's School",
    degree: 'Class 10 — CBSE',
    period: '2020 – 2021',
    score: '93.20%',
    location: 'Udupi, India',
  },
];

const interests = [
  { icon: Cpu, label: 'Systems Design' },
  { icon: Globe, label: 'Full-Stack Products' },
  { icon: Zap, label: 'Applied AI / RL' },
  { icon: GraduationCap, label: 'CS × Business' },
];

export default function About() {
  const headingRef = useScrollAnimation<HTMLDivElement>(0.1);
  const textRef = useScrollAnimation<HTMLDivElement>(0.1, 100);
  const eduRef = useScrollAnimation<HTMLDivElement>(0.1, 200);

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div
          ref={headingRef}
          className="section-animate mb-12"
        >
          <p className="text-cyan-400 font-mono text-sm mb-2">01 — about</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div ref={textRef} className="section-animate space-y-5 text-slate-400 leading-relaxed [&>p]:text-justify">
            <p>
              I&apos;m J Madhav Pai — a third-year{' '} <span className="text-slate-200 font-medium">
                CS & Business Systems
              </span>{' '}
              student at BMSCE Bangalore, currently working as an{' '}
              <span className="text-cyan-400 font-medium">
                AI Engineer Intern at Cynepia Technologies
              </span>
              .
            </p>
            <p>
              My degree is unusual on purpose: I chose CS + Business because I
              believe the best engineers understand{' '}
              <span className="text-slate-200 font-medium">
                why something is being built
              </span>{' '}
              just as well as how. That lens shapes everything I build — I zoom
              out to see the product impact, then zoom in to get the architecture
              right.
            </p>
            <p>
              Right now, I&apos;m building the infrastructure that makes{' '}
              <span className="text-slate-200 font-medium">agentic AI trainable</span>{' '}
              — designing frameworks that bridge benchmark datasets and
              reinforcement learning environments. When I&apos;m not doing that,
              I&apos;m shipping full-stack products that solve real problems, like
              a ride-booking platform with safety-first design for school
              commutes.
            </p>
            <p>
              I care deeply about systems thinking, clean architecture, and
              building things that actually{' '}
              <span className="text-slate-200 font-medium">work in production</span>.
            </p>

            {/* Interests */}
            <div className="flex flex-wrap gap-2 pt-2">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.07] text-sm text-slate-300"
                >
                  <Icon size={13} className="text-cyan-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div ref={eduRef} className="section-animate space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">
                Education
              </span>
            </div>
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="glass rounded-xl p-5 card-hover group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-100 text-sm group-hover:text-cyan-400 transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{edu.degree}</p>
                  </div>
                  <span className="shrink-0 tag">{edu.score}</span>
                </div>
                <div className="flex items-center gap-3 mt-3 text-xs text-slate-600">
                  <span>{edu.period}</span>
                  <span>·</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
