import chalk from 'chalk';
import { execSync } from 'child_process';
import { truncateSync, writeFileSync } from 'fs';
import moment from 'moment';
import { networkInterfaces } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

function getNodeVersion() {
  const info = execSync('node -v');
  return info.toString();
}

console.log('node:', chalk.blue(getNodeVersion()));

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);

let listenList = process.argv.slice(2);
listenList = listenList.length ? listenList : ['WLAN'];

function getIpAddress() {
  const interfaces = networkInterfaces();

  const logFile = path.join(__dirnameNew, 'interfce.log');
  try {
    truncateSync(logFile);
  } catch {}
  writeFileSync(
    logFile,
    `[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${JSON.stringify(interfaces)}`,
    { flag: 'a' }
  );

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
    console.log(
      `[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${chalk.green(
        'http://' + newIp
      )}`
    );
  }

  begin();
}

loggerIp();
