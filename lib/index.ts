import { subscribe, snapshot } from 'valtio/vanilla'
import type { DeepResolveType } from 'valtio/vanilla'

function toSvelteStore<T extends object>(proxyObject: T) {
    return {
        subscribe(fn: (payload: DeepResolveType<T>) => void) {
            fn(snapshot(proxyObject))
            return subscribe(proxyObject, () => {
                fn(snapshot(proxyObject));
            })
        }
    }
}

export default toSvelteStore