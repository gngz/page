import { getSeoData } from '@/services/cms-api';
import { MetadataRoute } from 'next'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const seo = await getSeoData();

    return {
        name: seo.title ?? 'Diogo Passos | Software Developer',
        short_name: seo.title ?? 'Diogo Passos',
        description: seo.description,
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
    }
}