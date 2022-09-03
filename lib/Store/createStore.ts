import Store from '.';

createStore.keys = [] as const;
const cacheMap: Record<string, ReturnType<typeof Store>> = {};
export function createStore(key: typeof createStore.keys[number]) {
  if (cacheMap[key]) {
    return cacheMap[key];
  }
  return Store(key as string);
}
