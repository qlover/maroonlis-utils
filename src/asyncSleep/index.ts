/**
 * 同步等待
 *
 * @param ms
 * @returns
 * @beta
 */
export default function asyncSleep(ms: number = 16) {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      resolve(timer)
    }, ms)
  })
}
