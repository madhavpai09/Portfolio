'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    color: 'text-cyan-400',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C / C++', 'HTML / CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'text-violet-400',
    skills: ['React', 'Next.js', 'FastAPI', 'TailwindCSS', 'Vite'],
  },
  {
    category: 'Databases & Storage',
    color: 'text-emerald-400',
    skills: ['PostgreSQL', 'SQL', 'DBMS'],
  },
  {
    category: 'Tools & Platforms',
    color: 'text-amber-400',
    skills: ['Git', 'Docker', 'Postman', 'VSCode', 'Oracle NetSuite'],
  },
  {
    category: 'CS Fundamentals',
    color: 'text-rose-400',
    skills: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'System Design',
      'Reinforcement Learning',
    ],
  },
];

export default function Skills() {
  const headingRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="section-animate mb-12">
          <p className="text-cyan-400 font-mono text-sm mb-2">03 — skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
            Tech Stack
          </h2>
          <p className="text-slate-500 text-sm">
            Focused on depth over breadth — tools I&apos;ve actually shipped with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ref = useScrollAnimation<HTMLDivElement>(0.1, i * 80);
            return (
              <div
                key={group.category}
                ref={ref}
                className="section-animate glass rounded-xl p-5 hover:border-white/10 transition-all duration-300 group"
              >
                <h3
                  className={`text-xs font-mono uppercase tracking-wider mb-4 ${group.color}`}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
