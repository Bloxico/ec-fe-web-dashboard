const env = process.env; // eslint-disable-line

const APP_PREFIX = 'ENRG_';

export const API_URL: string = env[`${APP_PREFIX}API_URL`];

export const CLIENT_ID: string = env[`${APP_PREFIX}CLIENT_ID`];

export const CLIENT_PASS: string = env[`${APP_PREFIX}CLIENT_PASS`];

export const HTTP_RETRY_REQUESTS: boolean = Boolean(
  env[`${APP_PREFIX}HTTP_RETRY_REQUESTS`],
);

export const HTTP_TIMEOUT: number = Number(env[`${APP_PREFIX}HTTP_TIMEOUT`]);

export const AUTH_COOKIE: string = '_ecAuthData';

export const APP_VERSION: string = env[`${APP_PREFIX}VERSION`];

export const isProd = env.NODE_ENV === 'production';
