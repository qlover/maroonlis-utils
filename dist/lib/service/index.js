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

/***/ "./src/asyncSleep/index.ts":
/*!*********************************!*\
  !*** ./src/asyncSleep/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/**\r\n * A \"modern\" sleep statement.\r\n *\r\n * @param ms The number of milliseconds to wait.\r\n */\r\nfunction asyncSleep(ms) {\r\n    if (ms === void 0) { ms = 16; }\r\n    return new Promise(function (resolve) { return setTimeout(resolve, ms); });\r\n}\r\nexports[\"default\"] = asyncSleep;\r\n\n\n//# sourceURL=webpack://maroonlis-utils/./src/asyncSleep/index.ts?");

/***/ }),

/***/ "./src/lang/index.ts":
/*!***************************!*\
  !*** ./src/lang/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isEmptyPropsValue = exports.isNumberWithString = exports.isSameNull = exports.isNotEmptyArray = void 0;\r\n/**\r\n * 验证是否是个非空数组\r\n * @param {any | undefined} value\r\n * @returns {value is T[]}\r\n */\r\nfunction isNotEmptyArray(value) {\r\n    return !!(Array.isArray(value) && value.length);\r\n}\r\nexports.isNotEmptyArray = isNotEmptyArray;\r\n/**\r\n *\r\n * @param {*} value\r\n * @returns {value is null | undefined}\r\n */\r\nfunction isSameNull(value) {\r\n    return value == null;\r\n}\r\nexports.isSameNull = isSameNull;\r\n/**\r\n * 是否是一个数字，包括字符串数字\r\n * @param {*} obj\r\n * @returns {obj is number}\r\n */\r\nfunction isNumberWithString(obj) {\r\n    if (typeof obj === 'string') {\r\n        if (!obj.length) {\r\n            return false;\r\n        }\r\n        var value = +obj;\r\n        // NaN 不等于自身\r\n        return value === value && typeof value === 'number';\r\n    }\r\n    return typeof obj === 'number';\r\n}\r\nexports.isNumberWithString = isNumberWithString;\r\n/**\r\n * 判断属性值是否是空\r\n * 包含 `isSameNull` 结果和 `''` 字符\r\n *\r\n * @param {*} value\r\n * @returns {value is undefined | null | ''}\r\n */\r\nfunction isEmptyPropsValue(value) {\r\n    return isSameNull(value) || value === '';\r\n}\r\nexports.isEmptyPropsValue = isEmptyPropsValue;\r\n\n\n//# sourceURL=webpack://maroonlis-utils/./src/lang/index.ts?");

/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\r\nvar asyncSleep_1 = __webpack_require__(/*! ../asyncSleep */ \"./src/asyncSleep/index.ts\");\r\nvar lang_1 = __webpack_require__(/*! ../lang */ \"./src/lang/index.ts\");\r\nfunction createRequest() {\r\n    var configer = lodash_1.identity;\r\n    var instancer = lodash_1.identity;\r\n    var filter = lodash_1.identity;\r\n    var mocker = lodash_1.identity;\r\n    var useConfig = function (func) { return (configer = func); };\r\n    var useInstaner = function (func) { return (instancer = func); };\r\n    var useMocktpl = function (func) { return (mocker = func); };\r\n    var useFilter = function (func) { return (filter = func); };\r\n    function request(config) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _config, delay, mock, filterResponse, _a, res;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        _config = (0, lodash_1.cloneDeep)(config);\r\n                        return [4 /*yield*/, configer(_config)];\r\n                    case 1:\r\n                        _b.sent();\r\n                        delay = _config.delay, mock = _config.mock, filterResponse = _config.filterResponse;\r\n                        // delay\r\n                        _a = (0, lodash_1.isNumber)(delay);\r\n                        if (!_a) \r\n                        // delay\r\n                        return [3 /*break*/, 3];\r\n                        return [4 /*yield*/, (0, asyncSleep_1.default)(delay)];\r\n                    case 2:\r\n                        _a = (_b.sent());\r\n                        _b.label = 3;\r\n                    case 3:\r\n                        // delay\r\n                        _a;\r\n                        // 2. mock tpl\r\n                        if (!(0, lang_1.isSameNull)(mock)) {\r\n                            return [2 /*return*/, mocker(mock)];\r\n                        }\r\n                        return [4 /*yield*/, instancer(_config)];\r\n                    case 4:\r\n                        res = _b.sent();\r\n                        if (!filterResponse) return [3 /*break*/, 6];\r\n                        return [4 /*yield*/, filter(res, _config)];\r\n                    case 5: return [2 /*return*/, _b.sent()];\r\n                    case 6: return [2 /*return*/, res];\r\n                }\r\n            });\r\n        });\r\n    }\r\n    return {\r\n        useMocktpl: useMocktpl,\r\n        useFilter: useFilter,\r\n        useConfig: useConfig,\r\n        useInstaner: useInstaner,\r\n        request: request,\r\n    };\r\n}\r\nexports[\"default\"] = createRequest;\r\n\n\n//# sourceURL=webpack://maroonlis-utils/./src/service/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/service/index.ts");
/******/ 	exports["maroonlis-utils"] = __webpack_exports__;
/******/ 	
/******/ })()
;