import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inastudio.eu',
  // страницы Work/About/Contact убраны (19.11.2026) — старые адреса ведут на главную
  // 22.11.2026: страницы проектов перенесены с /work/<проект>/ на /<проект>/ — старые адреса ведут на новые
  redirects: {
    '/work': '/', '/about': '/', '/contact': '/',
    '/work/cendreline': '/cendreline/',
    '/work/goutte-d-aigue': '/goutte-d-aigue/',
    '/work/morning-to-night': '/morning-to-night/',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
