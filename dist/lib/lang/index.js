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

/***/ "./src/lang/index.ts":
/*!***************************!*\
  !*** ./src/lang/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.isEmptyPropsValue = exports.isNumberWithString = exports.isSameNull = exports.isNotEmptyArray = void 0;\r\n/**\r\n * 验证是否是个非空数组\r\n * @param {any | undefined} value\r\n * @returns {value is T[]}\r\n */\r\nfunction isNotEmptyArray(value) {\r\n    return !!(Array.isArray(value) && value.length);\r\n}\r\nexports.isNotEmptyArray = isNotEmptyArray;\r\n/**\r\n *\r\n * @param {*} value\r\n * @returns {value is null | undefined}\r\n */\r\nfunction isSameNull(value) {\r\n    return value == null;\r\n}\r\nexports.isSameNull = isSameNull;\r\n/**\r\n * 是否是一个数字，包括字符串数字\r\n * @param {*} obj\r\n * @returns {obj is number}\r\n */\r\nfunction isNumberWithString(obj) {\r\n    if (typeof obj === 'string') {\r\n        if (!obj.length) {\r\n            return false;\r\n        }\r\n        var value = +obj;\r\n        // NaN 不等于自身\r\n        return value === value && typeof value === 'number';\r\n    }\r\n    return typeof obj === 'number';\r\n}\r\nexports.isNumberWithString = isNumberWithString;\r\n/**\r\n * 判断属性值是否是空\r\n * 包含 `isSameNull` 结果和 `''` 字符\r\n *\r\n * @param {*} value\r\n * @returns {value is undefined | null | ''}\r\n */\r\nfunction isEmptyPropsValue(value) {\r\n    return isSameNull(value) || value === '';\r\n}\r\nexports.isEmptyPropsValue = isEmptyPropsValue;\r\n\n\n//# sourceURL=webpack://maroonlis-utils/./src/lang/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/lang/index.ts"](0, __webpack_exports__);
/******/ 	exports["maroonlis-utils"] = __webpack_exports__;
/******/ 	
/******/ })()
;