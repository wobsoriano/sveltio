import { proxy } from '../index'

export const state = proxy({
  count: 0,
  post: fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
})
