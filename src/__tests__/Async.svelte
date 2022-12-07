<script lang="ts">
  import { useSnapshot } from '../index'
  import { state  } from './store'
  const snap = useSnapshot(state)
</script>

{#await $snap.post}
	<p>loading</p>
{:then post}
	<p data-testid={post.id}>ID: {post.id}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
