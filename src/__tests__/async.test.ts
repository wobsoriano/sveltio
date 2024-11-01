import { render, screen, waitFor } from '@testing-library/svelte'
import { expect, it } from 'vitest'
import Async from './Async.svelte'

it('async proxy', async () => {
  render(Async)
  await waitFor(() => expect(screen.getByTestId('1')))
})
