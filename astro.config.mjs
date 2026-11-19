import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inastudio.eu',
  // страницы Work/About/Contact убраны (19.11.2026) — старые адреса ведут на главную
  redirects: { '/work': '/', '/about': '/', '/contact': '/' },
  vite: {
    plugins: [tailwindcss()]
  }
});
