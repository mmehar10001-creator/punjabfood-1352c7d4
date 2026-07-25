// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, cloudflare, etc. Do not add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static-site build: prerender every route to HTML so the app can be hosted on
// any static host (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
// NOTE: do NOT set `server.entry` here — the custom entry breaks the
// prerender preview server (it looks for dist/server/server.js).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      pages: [
        { path: "/" },
        { path: "/menu" },
        { path: "/catering" },
        { path: "/about" },
        { path: "/contact" },
      ],
    },
  },
});

