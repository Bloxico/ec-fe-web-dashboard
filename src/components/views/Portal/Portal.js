import React  from 'react';

import { THEME_PREFIX } from "src/constants/ui";

const baseClass = `${THEME_PREFIX}-portal`;

const Portal = () => (
  <div className={baseClass}>
    <h1>Portal page</h1>
  </div>
);

export default Portal;
