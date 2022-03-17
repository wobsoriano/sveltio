import { fireEvent, render, screen } from '@testing-library/svelte'
import { describe, expect, it } from 'vitest'
import Counter from './Counter.svelte'

describe('useSnapshot', () => {
  it('renders correct in svelte', async() => {
    render(Counter)
    const btn = screen.getByRole('button')
    const div = screen.getByText('Clicks: 0')
    await fireEvent.click(btn)
    expect(div.innerHTML).toBe('Clicks: 1')
    await fireEvent.click(btn)
    expect(div.innerHTML).toBe('Clicks: 2')
  })
})
