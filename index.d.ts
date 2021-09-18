import type { DeepResolveType } from 'valtio/vanilla';

declare function useSnapshot<T extends object>(proxyObject: T): {
    subscribe(fn: (payload: DeepResolveType<T>) => void): () => void;
}
export { useSnapshot };
export { snapshot } from 'valtio/vanilla';
export { proxyWithComputed  } from 'valtio/utils';