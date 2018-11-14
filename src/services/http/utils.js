// @flow

import { LOGIN_PAGE } from 'src/constants';

export const redirectToLogin = () => {
  window.location.pathname = `${LOGIN_PAGE}`;
};
