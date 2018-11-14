// @flow

import { API_URL } from 'src/constants';
import {
  setAuthHeaderInterceptor,
  unauthorizedResponseInterceptor,
} from './interceptors';

import http from './http';

http.setConfig({
  baseURL: API_URL,
});

http.interceptors('request', setAuthHeaderInterceptor);
http.interceptors(
  'response',
  response => response,
  unauthorizedResponseInterceptor,
);

export default http;
