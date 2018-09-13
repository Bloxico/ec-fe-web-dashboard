import React  from 'react';

import { THEME_PREFIX } from "src/constants/ui";

const baseClass = `${THEME_PREFIX}-auth`;

const Auth = () => (
  <div className={baseClass}>
    <h1>Auth page</h1>
  </div>
);

export default Auth;
