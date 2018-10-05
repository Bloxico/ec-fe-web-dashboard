import React from 'react';

import { THEME_PREFIX } from 'src/constants/ui';
import Button from '../common/Button';

const baseClass = `${THEME_PREFIX}-portal`;

const Portal = () => (
  <div className={baseClass}>
    <h1>Portal page</h1>
    <Button shape="round" color="white" data="aaa" tabIndex={-1} size="small" aria={{ 'pressed': true }} >Click Me!</Button>
  </div>
);

export default Portal;
