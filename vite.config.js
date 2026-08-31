import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // host: true lets GitHub Codespaces forward the port to your browser.
    host: true,
    port: 5173,
  },
})
