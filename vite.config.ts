import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), svgr()],
  base: '/cv/',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
