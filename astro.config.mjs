// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio (Vercel). Se usa para el sitemap y las URL canónicas.
const SITIO = process.env.SITE_URL ?? 'https://vitalseed.vercel.app';

export default defineConfig({
  site: SITIO,
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
