import type { ActorSystem } from 'xactor';
declare function toSvelteStore<T extends object>(system: ActorSystem<unknown, T>): {
    subscribe(fn: (payload: T) => void): () => void;
}
export default toSvelteStore;