/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Store/index.ts":
/*!****************************!*\
  !*** ./src/Store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\r\nfunction defaultSet(key, value) {\r\n    if (typeof value === 'object') {\r\n        localStorage.setItem(key, JSON.stringify(value));\r\n    }\r\n    else {\r\n        localStorage.setItem(key, value);\r\n    }\r\n}\r\nfunction defaultGet(key) {\r\n    var value = localStorage.getItem(key);\r\n    try {\r\n        return value && JSON.parse(value);\r\n    }\r\n    catch (_a) {\r\n        return value;\r\n    }\r\n}\r\nfunction defaultRemove(key) {\r\n    localStorage.removeItem(key);\r\n}\r\n/**\r\n *\r\n * @param {string} key\r\n * @param {StoreConfig} config\r\n * @returns\r\n */\r\nfunction Store(key, config) {\r\n    var sset = config && (0, lodash_1.isFunction)(config === null || config === void 0 ? void 0 : config.set) ? config.set : defaultSet;\r\n    var sget = config && (0, lodash_1.isFunction)(config === null || config === void 0 ? void 0 : config.get) ? config.get : defaultGet;\r\n    var sremove = config && (0, lodash_1.isFunction)(config === null || config === void 0 ? void 0 : config.remove) ? config.remove : defaultRemove;\r\n    var storeObj = {\r\n        set: function (value, valueKey) {\r\n            if (!(0, lodash_1.isFunction)(sset)) {\r\n                return;\r\n            }\r\n            if (valueKey) {\r\n                var oldValue = storeObj.get({});\r\n                if (!(oldValue && typeof oldValue === 'object')) {\r\n                    oldValue = {};\r\n                }\r\n                oldValue[valueKey] = value;\r\n                value = oldValue;\r\n            }\r\n            try {\r\n                // 可能触发 DOMException: The quota has been exceeded.\r\n                return sset(key, value);\r\n            }\r\n            catch (e) {\r\n                console.log('store set Error', e);\r\n                return;\r\n            }\r\n        },\r\n        remove: function () {\r\n            if (!(0, lodash_1.isFunction)(sremove)) {\r\n                return;\r\n            }\r\n            return sremove(key);\r\n        },\r\n        get: function (defaultValue, valueKey) {\r\n            if (!(0, lodash_1.isFunction)(sget)) {\r\n                return;\r\n            }\r\n            var value;\r\n            try {\r\n                // Uncaught SyntaxError 错误 可能出现解析错误\r\n                value = sget(key) || defaultValue;\r\n            }\r\n            catch (e) {\r\n                console.error('Storage.get Error', e);\r\n                value = value || defaultValue;\r\n            }\r\n            if (valueKey && value && typeof value === 'object') {\r\n                value = value[valueKey];\r\n            }\r\n            return value || defaultValue;\r\n        },\r\n    };\r\n    return storeObj;\r\n}\r\nexports[\"default\"] = Store;\r\n\n\n//# sourceURL=webpack://maroonlis-utils/./src/Store/index.ts?");

/***/ }),

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Store/index.ts");
/******/ 	exports["maroonlis-utils"] = __webpack_exports__;
/******/ 	
/******/ })()
;