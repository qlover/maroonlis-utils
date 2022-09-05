/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
declare function asyncSleep(ms?: number): Promise<unknown>;

/**
 * 验证是否是个非空数组
 * @param {any | undefined} value
 * @returns {value is T[]}
 */
declare function isNotEmptyArray<T = any>(value: any | undefined): value is T[];
/**
 *
 * @param {*} value
 * @returns {value is null | undefined}
 */
declare function isSameNull(value: any): value is null | undefined;
/**
 * 是否是一个数字，包括字符串数字
 * @param {*} obj
 * @returns {obj is number}
 */
declare function isNumberWithString(obj: any): obj is number;
/**
 * 判断属性值是否是空
 * 包含 `isSameNull` 结果和 `''` 字符
 *
 * @param {*} value
 * @returns {value is undefined | null | ''}
 */
declare function isEmptyPropsValue(value: any): value is undefined | null | '';

declare const index_isNotEmptyArray: typeof isNotEmptyArray;
declare const index_isSameNull: typeof isSameNull;
declare const index_isNumberWithString: typeof isNumberWithString;
declare const index_isEmptyPropsValue: typeof isEmptyPropsValue;
declare namespace index {
  export {
    index_isNotEmptyArray as isNotEmptyArray,
    index_isSameNull as isSameNull,
    index_isNumberWithString as isNumberWithString,
    index_isEmptyPropsValue as isEmptyPropsValue,
  };
}

declare type BaseConfig = {
    /**
     * 延迟
     */
    delay?: number;
    /**
     * 拦截响应
     */
    filterResponse?: boolean;
    /**
     * 假数据
     */
    mock?: any;
    [key: string]: any;
};
declare type PromiseLike<A> = A | Promise<A>;
declare type WithConfigType<E> = BaseConfig & E;
declare type InstancerType<C, R> = (cfg: C) => PromiseLike<R>;
declare type UseInstancerType<C, R> = (func: InstancerType<C, R>) => void;
declare type ConfigerType<C> = (cfg: C) => PromiseLike<C>;
declare type UseConfigerType<C> = (func: ConfigerType<C>) => void;
declare type MockerType<D, R> = (data: D) => R;
declare type UseMockerType<D, R> = (func: MockerType<D, R>) => void;
declare type FilterType<R, C> = (res: R, cfg: C) => PromiseLike<R>;
declare type UseFilterType<R, C> = (func: FilterType<R, C>) => void;
declare function createRequest<E, R = Response, C = WithConfigType<E>>(): {
    useMocktpl: UseMockerType<any, R>;
    useFilter: UseFilterType<R, C>;
    useConfig: UseConfigerType<C>;
    useInstaner: UseInstancerType<C, R>;
    request: (config: C) => Promise<R>;
};

declare function defaultSet(key: string, value: any): void;
declare function defaultGet(key: string): any;
declare function defaultRemove(key: string): void;
declare type StoreConfig = {
    set?: typeof defaultSet;
    get?: typeof defaultGet;
    remove?: typeof defaultRemove;
};
/**
 *
 * @param {string} key
 * @param {StoreConfig} config
 * @returns
 */
declare function Store(key: string, config?: StoreConfig): {
    set(value: any, valueKey?: string): void;
    remove(): void;
    get(defaultValue?: any, valueKey?: any): any;
};

export { Store, asyncSleep, createRequest, index as lang };
