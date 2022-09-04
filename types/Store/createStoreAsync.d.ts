export declare function createStoreAsync(key: string): {
    set(value: any, valueKey?: string): Promise<void>;
    remove(): Promise<void>;
    get(defaultValue?: any, valueKey?: any): Promise<any>;
};
