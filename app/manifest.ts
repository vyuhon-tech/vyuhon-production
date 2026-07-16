import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vyuhon',
    short_name: 'Vyuhon',
    description: 'AI-First Business Transformation Partner',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#9775FF',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
