import { asyncSleep } from '..';
import generalID from '../generalID';

/**
 * 创建一个可以跳转 url 的对象, 可绕过 window.open 浏览的拦截
 * @returns 
 */
export function createOpenUrl() {
  const id = generalID();
  const a = document.createElement('a');
  a.id = id;
  a.target = '_blank';
  a.href = '#';
  a.setAttribute('style', 'display:none');
  document.body.appendChild(a);

  async function open(url: string) {
    a.href = url;

    await asyncSleep(1000);
    a.click();

    close();
  }

  function close() {
    const last = document.getElementById(id);
    if (last) {
      document.body.removeChild(last);
    }
  }
  return { a, open, close };
}
