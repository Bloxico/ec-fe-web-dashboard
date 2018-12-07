// @flow

import { AUTH_COOKIE, AUTH_PAGE } from 'src/constants';
import Cookie from 'src/services/cookie';

export const removeCookie = () => {
  Cookie.remove(AUTH_COOKIE);
};

export const redirectToLogin = () => {
  removeCookie();
  window.location.pathname = `${AUTH_PAGE}`;
};
