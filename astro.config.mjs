import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://inazench.github.io',
  base: '/ina-studio',
  vite: {
    plugins: [tailwindcss()]
  }
});
