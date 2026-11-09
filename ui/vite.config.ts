import { defineConfig } from "vite";

const backend =
  process.env.EFFIGY_API ?? `http://127.0.0.1:${process.env.EFFIGY_PORT ?? 8000}`;

export default defineConfig({
  server: {
    proxy: {
      "/api": { target: backend, changeOrigin: true, secure: false },
      "/events": { target: backend, changeOrigin: true, secure: false },
      "/files": { target: backend, changeOrigin: true, secure: false },
    },
  },
  build: { chunkSizeWarningLimit: 1500 },
});
