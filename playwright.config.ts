import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: "html",

  use: {
    baseURL: process.env.BASE_URL,
  },
});
