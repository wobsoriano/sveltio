import { render, screen, waitFor } from '@testing-library/svelte'
import { expect, test } from 'vitest'
import Async from './Async.svelte'

test('async proxy', async() => {
  render(Async)
  await waitFor(() => expect(screen.getByTestId('1')))
})
