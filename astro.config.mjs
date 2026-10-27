import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://team-robit.github.io',
  base: '/irc-mani-web',
  vite: {
    plugins: [tailwindcss()],
  },
});
