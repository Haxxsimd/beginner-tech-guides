import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Cloudflare Pages names a project after its Git repo by default
  // ("beginner-tech-guides"). Name the Pages project "teknikguider" during
  // setup to keep this URL, or update it here to match whatever name you pick.
  site: 'https://teknikguider.pages.dev',
  integrations: [mdx(), sitemap()],
  output: 'static',
});
