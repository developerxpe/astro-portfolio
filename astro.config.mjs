// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
   image: {
    domains: ["astro.build"],
  },
  devToolbar: {
    enabled: false,
  },

  integrations: [icon()],
});
