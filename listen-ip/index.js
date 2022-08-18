import chalk from 'chalk';
import moment from 'moment';
import { networkInterfaces } from 'os';

//获取本机ip
function getIpAddress() {
  const interfaces = networkInterfaces();
  let wlan;
  if ((wlan = interfaces['WLAN']) && Array.isArray(wlan)) {
    return wlan.filter((w) => w.family === 'IPv4').pop().address;
  }
  return '';
}

let lastIp;
function begin() {
  setTimeout(loggerIp, 1000);
}
function loggerIp() {
  const newIp = getIpAddress();
  if (newIp !== lastIp) {
    lastIp = newIp;
    console.log(`[${moment().format('Y-M-D H:m:s')}]: ${chalk.green(newIp)}`);
  }

  begin();
}

begin();
