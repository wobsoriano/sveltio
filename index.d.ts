import type { DeepResolveType } from 'valtio/vanilla';

declare function useStore<T extends object>(proxyObject: T): {
    subscribe(fn: (payload: DeepResolveType<T>) => void): () => void;
}
export default useStore;