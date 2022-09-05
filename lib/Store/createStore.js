import Store from '.';
createStore.keys = [];
var cacheMap = {};
export function createStore(key) {
    if (cacheMap[key]) {
        return cacheMap[key];
    }
    return Store(key);
}
