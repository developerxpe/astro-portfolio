import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["astro.build"],
  },
  devToolbar: {
    enabled: false,
  },

  integrations: [icon(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
