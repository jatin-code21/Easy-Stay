import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  external: ["source-map-js"],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  server:{
    '/api' : 'https://easy-stay-backend.onrender.com',
  }
});

// module.exports = {
//   define: {
//     VITE_API_BASE_URL: 'http://localhost:4000',
//   },
// };
