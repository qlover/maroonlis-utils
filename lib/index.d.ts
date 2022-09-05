import asyncSleep from './asyncSleep';
import createRequest from './service';
import Store from './Store';
declare const _default: {
    asyncSleep: typeof asyncSleep;
    createRequest: typeof createRequest;
    Store: typeof Store;
    isNotEmptyArray<T = any>(value: any): value is T[];
    isSameNull(value: any): value is null;
    isNumberWithString(obj: any): obj is number;
    isEmptyPropsValue(value: any): value is "";
};
export default _default;
