import { cloneDeep, identity, isNumber } from 'lodash'
import asyncSleep from '../asyncSleep'

import { isSameNull } from '../lang'

/**
 * @beta
 */
export type ApiRespone<Data = any> = {
  code?: number
  data?: Data
  msg?: string
  [key: string]: any
}

/**
 * @beta
 */
export type BaseConfig = {
  /**
   * 延迟
   */
  delay?: number

  /**
   * 拦截响应
   */
  filterResponse?: boolean

  /**
   * 假数据
   */
  mock?: any
  [key: string]: any
}
type PromiseLike<A> = A | Promise<A>

type WithConfigType<E> = BaseConfig & E

// instance
type InstancerType<C, R> = (cfg: C) => PromiseLike<R>
type UseInstancerType<C, R> = (func: InstancerType<C, R>) => void

// configer
type ConfigerType<C> = (cfg: C) => PromiseLike<C>
type UseConfigerType<C> = (func: ConfigerType<C>) => void

// mocker
type MockerType<D, R> = (data: D) => R
type UseMockerType<D, R> = (func: MockerType<D, R>) => void

// filter
type FilterType<R, C> = (res: R, cfg: C) => PromiseLike<R>
type UseFilterType<R, C> = (func: FilterType<R, C>) => void

/**
 * @beta
 */
export default function createRequest<E, R = Response, C = WithConfigType<E>>(
  defCfg?: C,
) {
  let configer: ConfigerType<C> = identity
  let instancer: InstancerType<C, R> = identity
  let filter: FilterType<R, C> = identity
  let mocker: MockerType<any, R> = identity

  const useConfig: UseConfigerType<C> = func => {
    configer = func
  }
  const useInstaner: UseInstancerType<C, R> = func => {
    instancer = func
  }
  const useMocktpl: UseMockerType<any, R> = func => {
    mocker = func
  }
  const useFilter: UseFilterType<R, C> = func => {
    filter = func
  }

  async function request(config: C) {
    // 1. config
    const iconfig = cloneDeep({ ...defCfg, ...config })

    await configer(iconfig)

    const { delay, mock, filterResponse } = iconfig as WithConfigType<any>

    // delay
    if (isNumber(delay)) {
      await asyncSleep(delay)
    }

    // 2. mock tpl
    if (!isSameNull(mock)) {
      return mocker(mock)
    }

    // 3. filter response
    const res = await instancer(iconfig)

    if (filterResponse) {
      return filter(res, iconfig)
    }
    return res
  }

  return {
    useMocktpl,
    useFilter,
    useConfig,
    useInstaner,
    request,
  }
}
