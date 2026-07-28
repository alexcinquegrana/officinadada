// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import type { OutputOptions } from "rollup";

/**
 * The TanStack Start prerender preview server looks for `dist/server/server.js`,
 * but Nitro emits `dist/server/index.mjs`. This plugin writes a tiny ESM shim
 * so the preview server can start. GitHub Pages only uses the static output in
 * `dist/client`, so this shim is never served in production.
 */
function serverJsShimPlugin() {
  return {
    name: "server-js-shim",
    writeBundle(options: OutputOptions) {
      if (options.dir && options.dir.replace(/\\/$/, "").endsWith("dist/server")) {
        writeFileSync(
          join(options.dir, "server.js"),
          `export { default } from "./index.mjs";\n`,
        );
      }
    },
  };
}

// GitHub Pages serves the site under the repository name path (e.g. /repo-name/).
// In local dev we keep the root path.
const basePath = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/`
  : "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static prerendering generates HTML files for every route so the site can be hosted
    // on GitHub Pages without a server runtime.
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
    nitro: {
      // Use the Node server preset during build so the prerender preview server
      // can start; GitHub Pages will only use the generated dist/client output.
      preset: "node-server",
    },
  },
  vite: {
    plugins: [mcpPlugin(), serverJsShimPlugin()],
    base: basePath,
  },
});
