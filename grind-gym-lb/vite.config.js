import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

/** GRIND GYM LB — separate build target; shares cinematic engine from repo root */
export default defineConfig({
  root: repoRoot,
  envDir: __dirname,
  envPrefix: 'VITE_',
  publicDir: path.join(repoRoot, 'public'),
  plugins: [react(), tailwindcss()],
  build: {
    outDir: path.join(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.join(__dirname, 'index.html'),
    },
  },
})
