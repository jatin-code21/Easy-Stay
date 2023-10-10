import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  external: ['source-map-js'],
})

// module.exports = {
//   define: {
//     VITE_API_BASE_URL: 'http://localhost:4000',
//   },
// };
