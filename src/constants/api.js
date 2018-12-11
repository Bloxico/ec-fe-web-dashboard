const env = process.env; // eslint-disable-line

const APP_PREFIX = 'ENRG_';

export const API_URL: string = env[`${APP_PREFIX}API_URL`];

export const HTTP_RETRY_REQUESTS: boolean = Boolean(
  env[`${APP_PREFIX}HTTP_RETRY_REQUESTS`],
);

export const HTTP_TIMEOUT: number = Number(env[`${APP_PREFIX}HTTP_TIMEOUT`]);

export const AUTH_COOKIE: string = '_ecAuthData';
