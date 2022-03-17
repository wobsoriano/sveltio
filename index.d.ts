declare function useSnapshot<T extends object>(
  proxyObject: T
): {
  subscribe(fn: (payload: T) => void): () => void;
};

export { useSnapshot };
export { snapshot } from "valtio/vanilla";
export { proxyWithComputed } from "valtio/utils";
