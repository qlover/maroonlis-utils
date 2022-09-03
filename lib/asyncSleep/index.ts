/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export default function asyncSleep(ms: number = 16) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
