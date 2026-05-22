import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

/** GRIND — Vite root is this folder so dist/ is flat for Netlify publish */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, 'VITE_')
  const brand = env.VITE_BRAND || 'grind'

  return {
    root: __dirname,
    base: '/',
    envDir: __dirname,
    envPrefix: 'VITE_',
    publicDir: path.join(repoRoot, 'public'),
    define: {
      'import.meta.env.VITE_BRAND': JSON.stringify(brand),
    },
    resolve: {
      alias: {
        '@engine': path.join(repoRoot, 'src'),
      },
    },
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),
      },
    },
  }
})
