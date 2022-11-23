import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from "@astrojs/react";
import { VitePWA } from "vite-plugin-pwa"
import { manifest, seoConfig } from './seo.config';

// https://astro.build/config
export default defineConfig({
  site: seoConfig.baseURL,
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [react()],
  vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: null,
				},
			})
		]
	}
});