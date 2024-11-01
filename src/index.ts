import { proxy, snapshot, subscribe } from 'valtio/vanilla'

interface Options {
  sync?: boolean
}

function useSnapshot<T extends object>(
  proxyObject: T,
  options?: Options,
) {
  const notifyInSync = options?.sync
  return {
    subscribe(fn: (payload: T) => void) {
      fn(snapshot(proxyObject) as T)
      return subscribe(proxyObject, () => {
        fn(snapshot(proxyObject) as T)
      }, notifyInSync)
    },
  }
}

export {
  proxy,
  subscribe,
  useSnapshot,
}
