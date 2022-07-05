import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/utils.ts',
  ],
  dts: true,
  clean: true,
  format: ['cjs', 'esm'],
})
