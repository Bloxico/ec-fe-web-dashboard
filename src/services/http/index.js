// @flow

import { API_URL, AUTH_COOKIE } from 'src/constants';
import Cookie from 'src/services/cookie';

import http from './http';

http.setConfig({
  baseURL: API_URL,
});

http.interceptors('request', (config) => {
  const authCookie = Cookie.getJSON(AUTH_COOKIE);

  if(!authCookie || !config.withAuth) {
    return config;
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${authCookie.accessToken}`,
    },
  };
});

export default http;
