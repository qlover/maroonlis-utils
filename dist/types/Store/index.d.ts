declare function defaultSet(key: string, value: any): void;
declare function defaultGet(key: string): any;
declare function defaultRemove(key: string): void;
export declare type StoreConfig = {
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
export default function Store(key: string, config?: StoreConfig): {
    set(value: any, valueKey?: string): any;
    remove(): any;
    get(defaultValue?: any, valueKey?: any): any;
};
export {};
