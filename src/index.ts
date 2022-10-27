export { default as asyncSleep } from './asyncSleep';
export * from './generalID';
export * from './lang';
export { default as createRequest } from './service';
export type { ApiRespone, BaseConfig } from './service';
export { default as Store } from './Store';
export type { StoreConfig } from './Store';
export { default as StoreAsync } from './Store/StoreAsync';
export type { StoreAsyncConfig } from './Store/StoreAsync';

export declare namespace MaroonLisUtilsNS {
  /**
   * 获取类型所有值, 相对于 Keyof
   */
  type ValueOf<T> = T[keyof T];
}
