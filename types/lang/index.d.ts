/**
 * 验证是否是个非空数组
 * @param {any | undefined} value
 * @returns {value is T[]}
 */
export declare function isNotEmptyArray<T = any>(value: any | undefined): value is T[];
/**
 *
 * @param {*} value
 * @returns {value is null | undefined}
 */
export declare function isSameNull(value: any): value is null | undefined;
/**
 * 是否是一个数字，包括字符串数字
 * @param {*} obj
 * @returns {obj is number}
 */
export declare function isNumberWithString(obj: any): obj is number;
/**
 * 判断属性值是否是空
 * 包含 `isSameNull` 结果和 `''` 字符
 *
 * @param {*} value
 * @returns {value is undefined | null | ''}
 */
export declare function isEmptyPropsValue(value: any): value is undefined | null | '';
