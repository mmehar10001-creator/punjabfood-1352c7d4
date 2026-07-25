// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact,
// tailwindcss, tsConfigPaths, cloudflare, etc. — do not add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Route TanStack Start's server entry to src/server.ts (SSR error wrapper).
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
