// @flow

import React from 'react';

import { THEME_PREFIX } from 'src/constants/ui';

export type PropsT = {
  handleLoginClick: Function,
  isLoginInProgress: boolean,
};

const baseClass = `${THEME_PREFIX}-auth`;

const Auth = ({ handleLoginClick, isLoginInProgress }: PropsT) => (
  <div className={baseClass}>
    <h1>Auth page</h1>

    <button onClick={handleLoginClick} disabled={isLoginInProgress}>
      {isLoginInProgress ? 'Logging in' : 'Login'}
    </button>
  </div>
);

export default Auth;
