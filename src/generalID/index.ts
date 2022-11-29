/**
 * 生成一个唯一ID
 *
 * @param randomLength
 * @returns
 * @beta
 */
export function generalID(randomLength?: number) {
  return Number(
    Math.random()
      .toString()
      .substring(2, randomLength ? randomLength + 2 : undefined) + Date.now(),
  ).toString(36)
}
