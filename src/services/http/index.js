// @flow

import { API_URL, AUTH_COOKIE } from 'src/constants';
import Cookie from 'src/services/cookie';

import http from './http';

http.setConfig({
  baseURL: API_URL,
});

http.interceptors('request', (config) => {
  const { accessToken } = Cookie.getJSON(AUTH_COOKIE);

  return {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': `Bearer ${accessToken}`
    }
  };
});

export default http;
