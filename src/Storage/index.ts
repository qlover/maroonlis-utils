Store.set = function (key: string, value: any) {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};
Store.get = function (key: string) {
  const value = localStorage.getItem(key);

  try {
    return value && JSON.parse(value);
  } catch {
    return value;
  }
};
Store.remove = function (key: string) {
  localStorage.removeItem(key);
};

Store.registerKeys = [] as string[];

Store.setRegisterKeys = function setRegisterKeys(keys: string[]) {
  Store.registerKeys = keys;
};
Store.hasKeys = function hasKeys(key: string) {
  return Store.registerKeys.includes(key);
};

/**
 *
 * @param {string} key
 * @param {any} config
 * @returns
 */
export default function Store(key: string) {
  if (!Store.hasKeys(key)) {
    throw new Error(`not register key: ${key}`);
  }

  function isFunction(value: any) {
    return typeof value === 'function';
  }

  async function set(value: any, valueKey?: string) {
    if (!isFunction(Store.set)) {
      return;
    }

    // 如果有值key,那么就是个对象
    if (valueKey) {
      let oldValue = await get({});

      // 如果已经有值但不是对象则直接置空
      if (!(oldValue && typeof oldValue === 'object')) {
        oldValue = {};
      }

      oldValue[valueKey] = value;
      value = oldValue;
    }

    try {
      // 可能触发 DOMException: The quota has been exceeded.
      return Store.set(key, value);
    } catch (e) {
      console.log('store set error', e);
      return;
    }
  }
  function remove() {
    if (!isFunction(Store.remove)) {
      return;
    }
    return Store.remove(key);
  }
  async function get(defaultValue?: any, valueKey?: any) {
    if (!isFunction(Store.get)) {
      return;
    }

    let value: any;

    try {
      // Uncaught SyntaxError 错误 可能出现解析错误
      value = Store.get(key) || defaultValue;
    } catch (e) {
      console.error('Store.get error', e);

      value = value || defaultValue;
    }

    // 如果有值key,那么就是个对象
    if (valueKey && value && typeof value === 'object') {
      value = value[valueKey];
    }

    return value || defaultValue;
  }

  return { set, remove, get };
}
