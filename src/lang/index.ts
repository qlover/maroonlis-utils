/**
 * 验证是否是个非空数组
 * @param {any | undefined} value
 * @returns {value is T[]}
 */
export function isNotEmptyArray<T = any>(value: any | undefined): value is T[] {
  return !!(Array.isArray(value) && value.length);
}

/**
 *
 * @param {*} value
 * @returns {value is null | undefined}
 */
export function isSameNull(value: any): value is null | undefined {
  return value == null;
}

/**
 * 是否是一个数字，包括字符串数字
 * @param {*} obj
 * @returns {obj is number}
 */
export function isNumberWithString(obj: any): obj is number {
  if (typeof obj === 'string') {
    if (!obj.length) {
      return false;
    }

    const value = +obj;

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
export function isEmptyPropsValue(value: any): value is undefined | null | '' {
  return isSameNull(value) || value === '';
}
