import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://git-github-com-kenny-yan9-ad-site.vercel.app/',
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
