import { Toast } from '@/components/atoms';
import '@/styles/index.scss';
import { Theme } from '@radix-ui/themes';
import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import { Footer } from './sections/footer/footer';
import { Navbar } from './sections/navbar';

const font = Lato({
  subsets: ['latin'],
  variable: '--font-default',
  weight: ['300', '400', '700'],
});

const title = 'Diogo Passos | Software Engineer';
const description =
  'Diogo Passos is an experienced software engineer with a passion for developing innovative solutions. Browse the site to learn more about his projects, skills, and professional experiences.';
const keywords = [
  'Gonçalo Passos',
  'Diogo Passos',
  'frontend',
  'software',
  'engineer',
  'developer',
  'innovative',
  'personal',
  'skills',
  'jamstack',
];

export async function generateMetadata() {
  return {
    metadataBase: new URL(process.env.WEB_URL ?? 'https://diogopassos.pt'),
    title: title,
    description: description,
    keywords: keywords,
    applicationName: title,
    alternates: {
      canonical: process.env.WEB_URL ?? 'https://diogopassos.pt',
      alternate: {
        href: 'https://www.diogopassos.pt',
        hreflang: 'en',
      },
    },
    openGraph: {
      title: title,
      description: description,
      tags: keywords,
    },
    twitter: {
      title: title,
      description: description,
      tags: keywords,
    },
  } as Metadata;
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  themeColor: '#E2E8F0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.variable}>
        <Theme
          panelBackground='translucent'
          radius='large'
          scaling='95%'
          accentColor='gray'
        >
          <div id='top' />
          <Navbar />
          {children}
          <Footer />
          <Toast />
          {/* <CookieConsent /> */}
        </Theme>
      </body>
    </html>
  );
}
