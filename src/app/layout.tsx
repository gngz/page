import { Toaster } from '@/components/ui/sonner';
import { getSeoData } from '@/services/cms-api';
import '@/styles/index.scss';
import type { Metadata, Viewport } from 'next';
import { League_Spartan } from 'next/font/google';
import { Footer } from './sections/footer/footer';
import { Navbar } from './sections/navbar';
const font = League_Spartan({ subsets: ['latin'] });

export async function generateMetadata() {
  const seo = await getSeoData();

  return {
    metadataBase: new URL(process.env.WEB_URL ?? 'https://diogopassos.pt'),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      tags: seo.keywords,
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      tags: seo.keywords,
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
      <body className={font.className}>
        <div id='top' />
        <Navbar />
        {children}
        <Footer />
        <Toaster closeButton position='top-center' />
        {/* <CookieConsent /> */}
      </body>
    </html>
  );
}
