/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*********************************!*\
  !*** ./src/asyncSleep/index.ts ***!
  \*********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
function asyncSleep(ms) {
    if (ms === void 0) { ms = 16; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports["default"] = asyncSleep;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.js.map