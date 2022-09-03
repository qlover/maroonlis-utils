import asyncSleep from './asyncSleep';
import service from './service';
import Store from './Store';
declare const maroonlisUtils: {
    asyncSleep: typeof asyncSleep;
    service: typeof service;
    Store: typeof Store;
    isNotEmptyArray<T = any>(value: any): value is T[];
    isSameNull(value: any): value is null;
    isNumberWithString(obj: any): obj is number;
    isEmptyPropsValue(value: any): value is "";
};
export default maroonlisUtils;
