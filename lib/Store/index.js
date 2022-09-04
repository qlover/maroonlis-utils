/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************!*\
  !*** ./src/Store/index.ts ***!
  \****************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var lodash_1 = __webpack_require__(/*! lodash */ "lodash");
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
function Store(key, config) {
    var sset = config && (0, lodash_1.isFunction)(config === null || config === void 0 ? void 0 : config.set) ? config.set : defaultSet;
    var sget = config && (0, lodash_1.isFunction)(config === null || config === void 0 ? void 0 : config.get) ? config.get : defaultGet;
    var sremove = config && (0, lodash_1.isFunction)(config === null || config === void 0 ? void 0 : config.remove) ? config.remove : defaultRemove;
    var storeObj = {
        set: function (value, valueKey) {
            if (!(0, lodash_1.isFunction)(sset)) {
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
            if (!(0, lodash_1.isFunction)(sremove)) {
                return;
            }
            return sremove(key);
        },
        get: function (defaultValue, valueKey) {
            if (!(0, lodash_1.isFunction)(sget)) {
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
exports["default"] = Store;

})();

exports["maroonlis-utils"] = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map