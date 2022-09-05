import StoreAsync from './StoreAsync';
var cacheMap = {};
export function createStoreAsync(key) {
    if (cacheMap[key]) {
        return cacheMap[key];
    }
    return StoreAsync(key);
}
