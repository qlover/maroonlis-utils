import chalk from 'chalk';
import moment from 'moment';
import { networkInterfaces } from 'os';
import getNodeVersion from '../../src/getNodeVersion/index.js';
console.log('node:', chalk.blue(getNodeVersion()));

let listenList = process.argv.slice(2);
listenList = listenList.length ? listenList : ['WLAN'];

console.log(JSON.stringify(interfaces));

//获取本机ip
function getIpAddress() {
  const interfaces = networkInterfaces();
  let wlan;

  for (let i = 0; i < listenList.length; i++) {
    const key = listenList[i];
    if ((wlan = interfaces[key]) && Array.isArray(wlan)) {
      return wlan.filter((w) => w.family === 'IPv4').pop().address;
    }
  }

  return '';
}

let lastIp;
let timer;
function begin() {
  clearTimeout(timer);

  timer = setTimeout(loggerIp, 1000);
}
function loggerIp() {
  const newIp = getIpAddress();
  if (newIp !== lastIp) {
    lastIp = newIp;
    console.log(`[${moment().format('Y-M-D H:m:s')}]: ${chalk.green(newIp)}`);
  }

  begin();
}

loggerIp();
