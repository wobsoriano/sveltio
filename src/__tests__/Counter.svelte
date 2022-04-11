<script lang="ts">
  import { useSnapshot } from '../index'
  import { state  } from './store'
  const snap = useSnapshot(state)
</script>

<button on:click={() => state.count++}>
  Clicks: {$snap.count}
</button>
