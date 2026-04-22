import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'J Madhav Pai — Software Engineer',
  description:
    'Full-stack developer and AI systems builder. CS & Business @ BMSCE Bangalore. Currently building AI training infrastructure at Cynepia Technologies.',
  keywords: [
    'Madhav Pai',
    'software engineer',
    'full-stack developer',
    'AI engineer',
    'BMSCE',
    'portfolio',
  ],
  authors: [{ name: 'J Madhav Pai', url: 'https://github.com/madhavpai09' }],
  openGraph: {
    title: 'J Madhav Pai — Software Engineer',
    description:
      'Full-stack developer and AI systems builder. CS & Business @ BMSCE Bangalore.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J Madhav Pai — Software Engineer',
    description:
      'Full-stack developer and AI systems builder. CS & Business @ BMSCE Bangalore.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#09090f] text-slate-100 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
