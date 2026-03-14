import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: "jollofactory.com",
  vite: {
    css: {
      postcss: './postcss.config.mjs',
    },
  },
});
