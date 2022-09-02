export declare type ApiRespone = {
    code?: number;
    data?: any;
    msg?: string;
    [key: string]: any;
};
export declare type BaseConfig = {
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
export default function createRequest<E, R = Response, C = WithConfigType<E>>(): {
    useMocktpl: UseMockerType<any, R>;
    useFilter: UseFilterType<R, C>;
    useConfig: UseConfigerType<C>;
    useInstaner: UseInstancerType<C, R>;
    request: (config: C) => Promise<R>;
};
export {};
