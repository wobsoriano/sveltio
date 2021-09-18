# svelte-xactor

This middleware allows you to easily convert your [xactor](https://github.com/statelyai/xactor) machines into a global store that implements store contract.

## Installation

```sh
yarn add svelte-xactor xactor
```

## Usage

```ts
// store.ts
import { createSystem, createBehavior } from 'xactor'

const counter = createBehavior(
  (state, message, context) => {
    if (message.type === 'add') {
      return {
        ...state,
        count: state.count + message.value,
      }
    }

    return state
  },
  { count: 0 }
)

export const counterSystem = createSystem(counter, 'counter')
```

```svelte
<script lang="ts">
  import toSvelteStore from 'svelte-xactor'
  import { counterSystem } from './store'
  const state = toSvelteStore(counterSystem)
</script>

<button on:click={() => counterSystem.send({type: 'add', value: 1})}>
  Clicks: {$state.count}
</button>
```