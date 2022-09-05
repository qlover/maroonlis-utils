import { isFunction } from 'lodash';
function defaultSet(key, value) {
    if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify(value));
    }
    else {
        localStorage.setItem(key, value);
    }
}
function defaultGet(key) {
    var value = localStorage.getItem(key);
    try {
        return value && JSON.parse(value);
    }
    catch (_a) {
        return value;
    }
}
function defaultRemove(key) {
    localStorage.removeItem(key);
}
/**
 *
 * @param {string} key
 * @param {StoreConfig} config
 * @returns
 */
export default function Store(key, config) {
    var sset = (config === null || config === void 0 ? void 0 : config.set) && isFunction(config === null || config === void 0 ? void 0 : config.set) ? config.set : defaultSet;
    var sget = (config === null || config === void 0 ? void 0 : config.get) && isFunction(config === null || config === void 0 ? void 0 : config.get) ? config.get : defaultGet;
    var sremove = (config === null || config === void 0 ? void 0 : config.remove) && isFunction(config === null || config === void 0 ? void 0 : config.remove)
        ? config.remove
        : defaultRemove;
    var storeObj = {
        set: function (value, valueKey) {
            if (!isFunction(sset)) {
                return;
            }
            if (valueKey) {
                var oldValue = storeObj.get({});
                if (!(oldValue && typeof oldValue === 'object')) {
                    oldValue = {};
                }
                oldValue[valueKey] = value;
                value = oldValue;
            }
            try {
                // 可能触发 DOMException: The quota has been exceeded.
                return sset(key, value);
            }
            catch (e) {
                console.log('store set Error', e);
                return;
            }
        },
        remove: function () {
            if (!isFunction(sremove)) {
                return;
            }
            return sremove(key);
        },
        get: function (defaultValue, valueKey) {
            if (!isFunction(sget)) {
                return;
            }
            var value;
            try {
                // Uncaught SyntaxError 错误 可能出现解析错误
                value = sget(key) || defaultValue;
            }
            catch (e) {
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
