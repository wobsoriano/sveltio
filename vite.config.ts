import { defineConfig } from 'vite'
import path from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const resolvePath = (str) => path.resolve(__dirname, str)
const isProd = process.env.NODE_ENV === "production"

const devConfig = defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist-demo'
  },
})

const prodConfig = defineConfig({
  build: {
    lib: {
      entry: resolvePath("lib/index.ts"),
      name: 'sveltio',
      fileName: (format) => `sveltio.${format}.js`,
    },
    rollupOptions: {
      external: ["valtio/vanilla", "valtio/utils"],
      output: {
        globals: {
          'valtio/vanilla': 'vanilla',
          'valtio/utils': 'utils'
        },
      },
    },
  }
})

export default isProd ? prodConfig : devConfig