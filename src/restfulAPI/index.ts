import { has, isPlainObject } from 'lodash';

type ApiResponse<D = any> = {
  code?: number;
  data?: D;
  msg?: string;
};

export function isRestfulValue<R>(obj: any): obj is ApiResponse<R> {
  return isPlainObject(obj) && has(obj, 'code');
}

const normalCodes = [200];

export function isNormalCode(code?: number) {
  return code ? normalCodes.includes(code) : false;
}

export async function onFilterResponse<R>(res: ApiResponse<R>) {
  const { data } = res;

  // 响应正常
  if (isRestfulValue(data) && isNormalCode(data.code)) {
    return Promise.resolve(res);
  }

  return Promise.reject(res);
}
