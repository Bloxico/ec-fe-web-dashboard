// @flow

import * as Cookies from 'cookies-js';

type CookieOptions = {
  path?: string;
  domain?: string | undefined;
  expires?: number | Date | undefined;
  secure?: boolean;
};

export default class Cookie {
  static get = (name: string) => Cookies.get(name);

  static set = (name: string, value: any, options: CookieOptions = {}) =>
    Cookies.set(name, value, options);

  static remove = (name: string) => Cookies.expire(name);

  static getJSON = (name: string) => {
    const cookie = Cookie.get(name);
    let cookieJSON = null;

    if (cookie === undefined) {
      return cookieJSON;
    }

    try {
      cookieJSON = JSON.parse(cookie);
    } catch (e) {
      // eslint-disable-next-line
      console.warn(e);
    }

    return cookieJSON;
  };

  static setJSON = (name: string, value: any, options?: CookieOptions) =>
    Cookie.set(name, JSON.stringify(value), options);
}
