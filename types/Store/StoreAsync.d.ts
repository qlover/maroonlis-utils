declare type StoreAsyncConfig = {
    set?: typeof defaultSet;
    get?: typeof defaultGet;
    remove?: typeof defaultRemove;
};
declare function defaultSet(key: string, value: any): Promise<void>;
declare function defaultGet(key: string): Promise<any>;
declare function defaultRemove(key: string): Promise<void>;
/**
 *
 * @param {string} key
 * @param {StorageConfig} config
 * @returns
 */
export default function StoreAsync(key: string, config?: StoreAsyncConfig): {
    set(value: any, valueKey?: string): Promise<void>;
    remove(): Promise<void>;
    get(defaultValue?: any, valueKey?: any): Promise<any>;
};
export {};
