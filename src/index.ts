import asyncSleep from './asyncSleep';
import * as lang from './lang';
import service from './service';
import Store from './Store';

const maroonlisUtils = {
  ...lang,
  asyncSleep,
  service,
  Store,
};
export default maroonlisUtils;
