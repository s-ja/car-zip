import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [reactPlugin()],
});