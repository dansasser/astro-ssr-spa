import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), alpinejs(), icon()],
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
});