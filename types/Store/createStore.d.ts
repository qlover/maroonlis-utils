export declare function createStore(key: typeof createStore.keys[number]): {
    set(value: any, valueKey?: string): any;
    remove(): any;
    get(defaultValue?: any, valueKey?: any): any;
};
export declare namespace createStore {
    var keys: readonly [];
}
