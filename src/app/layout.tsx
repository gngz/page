import '@/styles/global.scss';
import type { Metadata, Viewport } from 'next';
import { League_Spartan } from 'next/font/google';
import { Footer } from './sections/footer';
import { Navbar } from './sections/navbar';

const font = League_Spartan({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Diogo Passos | Software Engineer',
  description:
    'Diogo Passos is an experienced software engineer with a passion for developing innovative solutions. Browse the site to learn more about his projects, skills, and professional experiences.',
  keywords: [
    'software engineer',
    'software',
    'developer',
    'personal',
    'website',
    'software development',
    'frontend',
    'innovative',
    'solutions',
    'digital channels',
    'skills',
    'experience',
  ],
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
