import { getSeoData } from '@/services/cms-api/apis/seo';
import { Hero } from './sections/hero';

export async function generateMetadata() {
  const seo = await getSeoData();

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
  };
}

export default async function Home() {
  return (
    <>
      <Hero />
      <div></div>
    </>
  );
}
