// @flow

import { AUTH_COOKIE, LOGIN_PAGE } from 'src/constants';
import Cookie from 'src/services/cookie';

export const redirectToLogin = () => {
  Cookie.remove(AUTH_COOKIE);
  window.location.pathname = `${LOGIN_PAGE}`;
};
