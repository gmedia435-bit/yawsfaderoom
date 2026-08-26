import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      // Do not inline large assets — serve them from CDN
      assetsInlineLimit: 0,
    },
    // Exclude large video files from being processed/copied by Vite
    assetsInclude: ['**/*.mp4'],
  },
});
