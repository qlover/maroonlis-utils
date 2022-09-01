import StoreAsync from './StoreAsync';

const cacheMap: Record<string, ReturnType<typeof StoreAsync>> = {};
export function createStoreAsync(key: string) {
  if (cacheMap[key]) {
    return cacheMap[key];
  }
  return StoreAsync(key);
}
