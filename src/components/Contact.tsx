'use client';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jmadhavpai@gmail.com',
    href: 'mailto:jmadhavpai@gmail.com',
    cta: 'Send a message',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/madhavpai09',
    href: 'https://github.com/madhavpai09',
    cta: 'View code',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jmadhavpai',
    href: 'https://linkedin.com/in/jmadhavpai',
    cta: 'Connect',
  },
];

export default function Contact() {
  const headingRef = useScrollAnimation<HTMLDivElement>(0.1);
  const cardsRef = useScrollAnimation<HTMLDivElement>(0.1, 150);

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="section-animate mb-12">
          <p className="text-cyan-400 font-mono text-sm mb-2">05 — contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            I&apos;m actively looking for full-time and internship opportunities in
            software engineering and AI. Whether you&apos;re a recruiter, a fellow
            builder, or just want to chat systems — my inbox is open.
          </p>
          <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-3">
            <MapPin size={13} />
            <span>Bangalore, India · Open to remote & relocation</span>
          </div>
        </div>

        <div ref={cardsRef} className="section-animate grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map(({ icon: Icon, label, value, href, cta }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 card-hover group flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                  <Icon size={16} />
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-600 group-hover:text-cyan-400 transition-colors"
                />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                <p className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors break-all">
                  {value}
                </p>
              </div>
              <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                {cta} →
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>
            Built with{' '}
            <span className="text-slate-400">Next.js + Tailwind</span> by{' '}
            <span className="text-cyan-400">J Madhav Pai</span>
          </p>
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} · Made in Bangalore
          </p>
        </div>
      </div>
    </section>
  );
}
