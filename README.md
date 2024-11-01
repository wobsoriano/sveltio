# sveltio

[![npm (tag)](https://img.shields.io/npm/v/sveltio?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/sveltio) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/sveltio?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/sveltio?style=flat&colorA=000000&colorB=000000)

State management solution for Svelte using proxies. Powered by [valtio](https://github.com/pmndrs/valtio).

## Installation

```sh
pnpm add valtio sveltio
```

## Usage

```ts
// store.ts
import { proxy } from 'sveltio'

export const state = proxy({ count: 0 })
```

Read from snapshots, mutate the source.

```svelte
<script lang="ts">
  import { useSnapshot } from 'sveltio'
  import { state } from './store'
  const snap = useSnapshot(state)
</script>

<button on:click={() => state.count++}>
  Clicks: {$snap.count}
</button>
```

## License

MIT
