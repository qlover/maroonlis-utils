import { has, isPlainObject } from 'lodash';

export function isRestfulValue<D>(obj: any): obj is D {
  return isPlainObject(obj) && has(obj, 'code');
}

const normalCodes = [200];

export function isNormalCode(code?: number) {
  return code ? normalCodes.includes(code) : false;
}
