import Cookie from 'src/services/cookie';
import { AUTH_COOKIE } from 'src/constants';

import { redirectToLogin } from './utils';

export const setAuthHeaderInterceptor = config => {
  const authCookie = Cookie.getJSON(AUTH_COOKIE);

  if (!config.withAuth) {
    return config;
  }

  if (!authCookie) {
    redirectToLogin();
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${authCookie.accessToken}`,
    },
  };
};

export const unauthorizedResponseInterceptor = error => {
  if (error.response && error.response.status === 401) {
    Cookie.remove(AUTH_COOKIE);
    redirectToLogin();
  }

  return Promise.reject(error);
};
