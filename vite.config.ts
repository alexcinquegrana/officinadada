// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

// GitHub Pages serves the site under the repository name path (e.g. /repo-name/).
// In local dev we keep the root path.
const basePath = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
  : "/";

/**
 * TanStack Start's prerender preview server looks for the SSR entry at
 * `dist/server/server.js` (derived from the `server` input). Nitro's
 * cloudflare-module preset emits it as `dist/server/index.mjs`. This shim
 * re-exports it so static prerendering can run, while the final deploy still
 * ships only the static `dist/client` output to GitHub Pages.
 */
function serverEntryShimPlugin() {
  return {
    name: "server-entry-shim",
    enforce: "post" as const,
    buildApp: {
      order: "pre" as const,
      handler(builder: { config: { root: string } }) {
        const serverDir = path.join(builder.config.root, "dist/server");
        mkdirSync(serverDir, { recursive: true });
        writeFileSync(
          path.join(serverDir, "server.js"),
          `export { default } from "./index.mjs";\n`,
        );
      },
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Generate static HTML files for every route so the site can be hosted on GitHub Pages.
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
  // Use a Node-compatible Nitro preset for prerendering locally / in CI, then
  // deploy only the static `dist/client` output to GitHub Pages.
  nitro: {
    preset: "node-server",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
  },
  vite: {
    plugins: [serverEntryShimPlugin()],
    base: basePath,
  },
});
