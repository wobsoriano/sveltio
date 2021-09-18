# svaltio

Proxy-state with [valtio](https://github.com/pmndrs/valtio).

## Installation

```sh
yarn add svaltio valtio
```

## Usage

```ts
// store.ts
import { proxy } from 'valtio/vanilla'

export const state = proxy({ count: 0 })
```

Read from snapshots, mutate the source.

```svelte
<script lang="ts">
  import useSnapshot from 'svaltio'
  import { state  } from '../store'
  const snap = useSnapshot(state)
</script>

<button on:click={() => state.count++}>
  Clicks: {$snap.count}
</button>
```