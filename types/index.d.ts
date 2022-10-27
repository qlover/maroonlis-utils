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
 * 是否是一个数字，包括字符串数字, 不包括 NaN
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
/**
 * 判断是否以某个字符串开头
 * @param str
 * @param start
 */
declare function isWhetherStar(str: string, start: string): boolean;
/**
 * 判断两个值类型是否相等
 * @param obj1
 * @param obj2
 * @returns
 */
declare function isEqType(obj1: any, obj2: any): obj2 is typeof obj1;
/**
 * 是否是 html 字符串
 * @param html
 * @returns
 */
declare function isHTMLString(html: any): html is string;

declare type ApiRespone = {
    code?: number;
    data?: any;
    msg?: string;
    [key: string]: any;
};
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
declare function createRequest<E, R = Response, C = WithConfigType<E>>(defCfg?: C): {
    useMocktpl: UseMockerType<any, R>;
    useFilter: UseFilterType<R, C>;
    useConfig: UseConfigerType<C>;
    useInstaner: UseInstancerType<C, R>;
    request: (config: C) => Promise<R>;
};

declare function defaultSet$1(key: string, value: any): void;
declare function defaultGet$1(key: string): any;
declare function defaultRemove$1(key: string): void;
declare type StoreConfig = {
    set?: typeof defaultSet$1;
    get?: typeof defaultGet$1;
    remove?: typeof defaultRemove$1;
};
/**
 * 存储
 * @param {StoreConfig} config
 * @returns
 */
declare function Store(config?: StoreConfig): (key: string) => {
    set(value: any, valueKey?: string): void;
    remove(): void;
    get(defaultValue?: any, valueKey?: any): any;
};

declare type StoreAsyncConfig = {
    set?: typeof defaultSet;
    get?: typeof defaultGet;
    remove?: typeof defaultRemove;
};
declare function defaultSet(key: string, value: any): Promise<void>;
declare function defaultGet(key: string): Promise<any>;
declare function defaultRemove(key: string): Promise<void>;
/**
 * 支持 async/await 存储
 * @param {StoreAsyncConfig} config
 * @returns
 */
declare function StoreAsync(config?: StoreAsyncConfig): (key: string) => {
    set(value: any, valueKey?: string): Promise<void>;
    remove(): Promise<void>;
    get(defaultValue?: any, valueKey?: any): Promise<any>;
};

declare namespace MaroonLisUtils {
    /**
     * 获取类型所有值, 相对于 Keyof
     */
    type ValueOf<T> = T[keyof T];
}

export { ApiRespone, BaseConfig, MaroonLisUtils, Store, StoreAsync, StoreAsyncConfig, StoreConfig, asyncSleep, createRequest, isEmptyPropsValue, isEqType, isHTMLString, isNotEmptyArray, isNumberWithString, isSameNull, isWhetherStar };
