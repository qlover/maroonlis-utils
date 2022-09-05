/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export default function asyncSleep(ms) {
    if (ms === void 0) { ms = 16; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
