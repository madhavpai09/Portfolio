import Navbar from '@/components/Navbar';
import { GlassmorphismPortfolioBlock } from '@/components/ui/glassmorphism-portfolio-block-shadcnui';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Divider = () => (
  <div className="max-w-5xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <GlassmorphismPortfolioBlock />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
    </>
  );
}
