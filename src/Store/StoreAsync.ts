import { isFunction } from 'lodash';
type StoreAsyncConfig = {
  set?: typeof defaultSet;
  get?: typeof defaultGet;
  remove?: typeof defaultRemove;
};

async function defaultSet(key: string, value: any) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}
async function defaultGet(key: string) {
  const value = localStorage.getItem(key);

  try {
    return value && JSON.parse(value);
  } catch {
    return value;
  }
}
async function defaultRemove(key: string) {
  localStorage.removeItem(key);
}
/**
 *
 * @param {string} key
 * @param {StorageConfig} config
 * @returns
 */
export default function StoreAsync(key: string, config?: StoreAsyncConfig) {
  const sset = config && isFunction(config?.set) ? config.set : defaultSet;
  const sget = config && isFunction(config?.get) ? config.get : defaultGet;
  const sremove =
    config && isFunction(config?.remove) ? config.remove : defaultRemove;

  const storeObj = {
    async set(value: any, valueKey?: string) {
      if (!isFunction(sset)) {
        return;
      }

      if (valueKey) {
        let oldValue = await storeObj.get({});

        if (!(oldValue && typeof oldValue === 'object')) {
          oldValue = {};
        }

        oldValue[valueKey] = value;
        value = oldValue;
      }

      try {
        // 可能触发 DOMException: The quota has been exceeded.
        return sset(key, value);
      } catch (e) {
        console.log('store set Error', e);
        return;
      }
    },
    async remove() {
      if (!isFunction(sremove)) {
        return;
      }
      return await sremove(key);
    },
    async get(defaultValue?: any, valueKey?: any) {
      if (!isFunction(sget)) {
        return;
      }

      let value: any;

      try {
        // Uncaught SyntaxError 错误 可能出现解析错误
        value = sget(key) || defaultValue;
      } catch (e) {
        console.error('Storage.get Error', e);

        value = value || defaultValue;
      }

      if (valueKey && value && typeof value === 'object') {
        value = value[valueKey];
      }

      return value || defaultValue;
    },
  };

  return storeObj;
}
