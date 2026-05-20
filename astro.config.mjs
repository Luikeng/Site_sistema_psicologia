import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sistemapsicologia.com.br',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Paginas marcadas noindex (status, status-staging) ficam fora do sitemap.
      filter: (page) => !/\/status(-staging)?\/?$/.test(page),
      i18n: {
        defaultLocale: 'pt-BR',
        locales: { 'pt-BR': 'pt-BR' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
