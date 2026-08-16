import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';

export default defineConfig({
  site: 'https://myagentskills.dev',
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
  integrations: [pagefind()],
  vite: {
    build: {
      rollupOptions: {
        external: ["/pagefind/pagefind-entry.js"],
      },
    },
  },
});
