import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const _dirname = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },

  resolve: {
    alias: [
      { find: 'Src', replacement: path.resolve(_dirname, 'src/') },
    ],
  },

  css: {
    modules: {
      localsConvention: "camelCase"
    }
  }
})
