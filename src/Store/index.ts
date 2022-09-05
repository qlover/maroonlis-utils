import { isFunction } from 'lodash';

function defaultSet(key: string, value: any) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
}
function defaultGet(key: string) {
  const value = localStorage.getItem(key);

  try {
    return value && JSON.parse(value);
  } catch {
    return value;
  }
}
function defaultRemove(key: string) {
  localStorage.removeItem(key);
}

export type StoreConfig = {
  set?: typeof defaultSet;
  get?: typeof defaultGet;
  remove?: typeof defaultRemove;
};

/**
 *
 * @param {string} key
 * @param {StoreConfig} config
 * @returns
 */
export default function Store(key: string, config?: StoreConfig) {
  const sset = config?.set && isFunction(config?.set) ? config.set : defaultSet;
  const sget = config?.get && isFunction(config?.get) ? config.get : defaultGet;
  const sremove =
    config?.remove && isFunction(config?.remove)
      ? config.remove
      : defaultRemove;

  const storeObj = {
    set(value: any, valueKey?: string) {
      if (!isFunction(sset)) {
        return;
      }

      if (valueKey) {
        let oldValue = storeObj.get({});

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
    remove() {
      if (!isFunction(sremove)) {
        return;
      }
      return sremove(key);
    },
    get(defaultValue?: any, valueKey?: any) {
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
