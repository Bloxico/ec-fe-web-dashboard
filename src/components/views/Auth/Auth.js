// @flow

import React from 'react';

import { THEME_PREFIX } from 'src/constants/ui';

import Login from './Login';

const baseClass = `${THEME_PREFIX}-auth`;

const Auth = () => (
  <div className={baseClass}>
    <Login />
  </div>
);

export default Auth;
