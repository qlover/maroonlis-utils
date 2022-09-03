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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/asyncSleep/index.ts"](0, __webpack_exports__);
/******/ 	exports["maroonlis-utils"] = __webpack_exports__;
/******/ 	
/******/ })()
;