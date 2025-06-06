import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: "https://moeeztofiq.com",
      dynamicRoutes: [
        "/",
        "/about_me",
        "/contact_me",
        "/credits",
        "/personal_projects",
        "/work_experience",
      ],
    }),
  ],
});
