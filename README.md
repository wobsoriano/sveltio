# svaltio

Proxy-state with [valtio](https://github.com/pmndrs/valtio).

## Installation

```sh
yarn add svaltio valtio
```

## Usage

```ts
// store.ts
import { proxy } from 'svaltio'

export const state = proxy({ count: 0 })
```

Read from snapshots, mutate the source.

```svelte
<script lang="ts">
  import { useSnapshot } from 'svaltio'
  import { state } from './store'
  const snap = useSnapshot(state)
</script>

<button on:click={() => state.count++}>
  Clicks: {$snap.count}
</button>
```

#### `proxyWithComputed`

You can have computed values with dependency tracking with property access.

```ts
import { proxyWithComputed } from 'svaltio'

export const state = proxyWithComputed({
  count: 1,
}, {
  doubled: snap => snap.count * 2
})
```

#### `proxyWithHistory`

Function to create a proxy with snapshot history.

```ts
import { proxyWithHistory } from 'svaltio'

const state = proxyWithHistory({ count: 0 })
console.log(state.value) // ---> { count: 0 }
state.value.count += 1
console.log(state.value) // ---> { count: 1 }
state.undo()
console.log(state.value) // ---> { count: 0 }
state.redo()
console.log(state.value) // ---> { count: 1 }
```