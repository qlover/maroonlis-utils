/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./src/lang/index.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyPropsValue = exports.isNumberWithString = exports.isSameNull = exports.isNotEmptyArray = void 0;
/**
 * 验证是否是个非空数组
 * @param {any | undefined} value
 * @returns {value is T[]}
 */
function isNotEmptyArray(value) {
    return !!(Array.isArray(value) && value.length);
}
exports.isNotEmptyArray = isNotEmptyArray;
/**
 *
 * @param {*} value
 * @returns {value is null | undefined}
 */
function isSameNull(value) {
    return value == null;
}
exports.isSameNull = isSameNull;
/**
 * 是否是一个数字，包括字符串数字
 * @param {*} obj
 * @returns {obj is number}
 */
function isNumberWithString(obj) {
    if (typeof obj === 'string') {
        if (!obj.length) {
            return false;
        }
        var value = +obj;
        // NaN 不等于自身
        return value === value && typeof value === 'number';
    }
    return typeof obj === 'number';
}
exports.isNumberWithString = isNumberWithString;
/**
 * 判断属性值是否是空
 * 包含 `isSameNull` 结果和 `''` 字符
 *
 * @param {*} value
 * @returns {value is undefined | null | ''}
 */
function isEmptyPropsValue(value) {
    return isSameNull(value) || value === '';
}
exports.isEmptyPropsValue = isEmptyPropsValue;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=index.js.map