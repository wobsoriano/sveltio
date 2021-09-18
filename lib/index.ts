import { subscribe, snapshot, proxy } from 'valtio/vanilla'
import type { DeepResolveType } from 'valtio/vanilla'

function useSnapshot<T extends object>(proxyObject: T) {
    return {
        subscribe(fn: (payload: DeepResolveType<T>) => void) {
            fn(snapshot(proxyObject))
            return subscribe(proxyObject, () => {
                fn(snapshot(proxyObject));
            })
        }
    }
}

export {
    useSnapshot,
    proxy
}
export {
    proxyWithComputed,
    proxyWithHistory
} from 'valtio/utils'