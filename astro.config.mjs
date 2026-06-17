import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.petaginghub.com/',
  i18n: {
    locales: ['zh-tw', 'en'],
    defaultLocale: 'zh-tw',
    prefixDefaultLocale: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
