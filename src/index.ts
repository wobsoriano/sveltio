import { proxy, snapshot, subscribe } from 'valtio/vanilla'

function useSnapshot<T extends object>(proxyObject: T) {
  return {
    subscribe(fn: (payload: T) => void) {
      fn(snapshot(proxyObject) as T)
      return subscribe(proxyObject, () => {
        fn(snapshot(proxyObject) as T)
      })
    },
  }
}

export {
  useSnapshot,
  proxy,
  subscribe,
}
