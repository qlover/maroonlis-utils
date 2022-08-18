const os = require('os');
const { start } = require('repl');
// const chalk = require('chalk');

//获取本机ip
function getIpAddress() {
  const interfaces = os.networkInterfaces();
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
    console.log(`[${new Date().toLocaleDateString()}]: ${newIp}`);
  }

  begin();
}

begin();
