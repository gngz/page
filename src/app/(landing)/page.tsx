import { getSeoData } from '@/services/cms-api/apis/seo';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export async function generateMetadata() {
  const seo = await getSeoData();

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
  };
}

export default async function Home() {
  return <Text>Page Under Construction</Text>;
}
