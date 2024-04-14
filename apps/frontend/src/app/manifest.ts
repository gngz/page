import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    name: 'Diogo Passos | Software Developer',
    short_name: 'Diogo Passos',
    description:
      'Diogo Passos is an experienced software engineer with a passion for developing innovative solutions. Browse the site to learn more about his projects, skills, and professional experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#F1F5F9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
