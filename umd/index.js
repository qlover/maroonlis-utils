(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.maroonUtils = {}, global.lodash));
})(this, (function (exports, lodash) { 'use strict';

  /**
   * A "modern" sleep statement.
   *
   * @param ms The number of milliseconds to wait.
   */
  function asyncSleep(ms) {
      if (ms === void 0) { ms = 16; }
      return new Promise(function (resolve) { return setTimeout(resolve, ms); });
  }

  /**
   * 验证是否是个非空数组
   * @param {any | undefined} value
   * @returns {value is T[]}
   */
  function isNotEmptyArray(value) {
      return !!(Array.isArray(value) && value.length);
  }
  /**
   *
   * @param {*} value
   * @returns {value is null | undefined}
   */
  function isSameNull(value) {
      return value == null;
  }
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

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isNotEmptyArray: isNotEmptyArray,
    isSameNull: isSameNull,
    isNumberWithString: isNumberWithString,
    isEmptyPropsValue: isEmptyPropsValue
  });

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  function createRequest() {
      var configer = lodash.identity;
      var instancer = lodash.identity;
      var filter = lodash.identity;
      var mocker = lodash.identity;
      var useConfig = function (func) { return (configer = func); };
      var useInstaner = function (func) { return (instancer = func); };
      var useMocktpl = function (func) { return (mocker = func); };
      var useFilter = function (func) { return (filter = func); };
      function request(config) {
          return __awaiter(this, void 0, void 0, function () {
              var _config, delay, mock, filterResponse, _a, res;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _config = lodash.cloneDeep(config);
                          return [4 /*yield*/, configer(_config)];
                      case 1:
                          _b.sent();
                          delay = _config.delay, mock = _config.mock, filterResponse = _config.filterResponse;
                          // delay
                          _a = lodash.isNumber(delay);
                          if (!_a) 
                          // delay
                          return [3 /*break*/, 3];
                          return [4 /*yield*/, asyncSleep(delay)];
                      case 2:
                          _a = (_b.sent());
                          _b.label = 3;
                      case 3:
                          // 2. mock tpl
                          if (!isSameNull(mock)) {
                              return [2 /*return*/, mocker(mock)];
                          }
                          return [4 /*yield*/, instancer(_config)];
                      case 4:
                          res = _b.sent();
                          if (!filterResponse) return [3 /*break*/, 6];
                          return [4 /*yield*/, filter(res, _config)];
                      case 5: return [2 /*return*/, _b.sent()];
                      case 6: return [2 /*return*/, res];
                  }
              });
          });
      }
      return {
          useMocktpl: useMocktpl,
          useFilter: useFilter,
          useConfig: useConfig,
          useInstaner: useInstaner,
          request: request,
      };
  }

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
      var sset = (config === null || config === void 0 ? void 0 : config.set) && lodash.isFunction(config === null || config === void 0 ? void 0 : config.set) ? config.set : defaultSet;
      var sget = (config === null || config === void 0 ? void 0 : config.get) && lodash.isFunction(config === null || config === void 0 ? void 0 : config.get) ? config.get : defaultGet;
      var sremove = (config === null || config === void 0 ? void 0 : config.remove) && lodash.isFunction(config === null || config === void 0 ? void 0 : config.remove)
          ? config.remove
          : defaultRemove;
      var storeObj = {
          set: function (value, valueKey) {
              if (!lodash.isFunction(sset)) {
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
              if (!lodash.isFunction(sremove)) {
                  return;
              }
              return sremove(key);
          },
          get: function (defaultValue, valueKey) {
              if (!lodash.isFunction(sget)) {
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

  exports.Store = Store;
  exports.asyncSleep = asyncSleep;
  exports.createRequest = createRequest;
  exports.lang = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
