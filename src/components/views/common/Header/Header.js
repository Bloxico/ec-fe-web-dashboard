import React from 'react';

import Button from '@ui/Button';
import iconBack from '@images/icon-back.svg';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-header`;

const Header = ({ title }: { title: string }) => (
  <header className={baseClass}>
    <h4 className={`${baseClass}__title`}>{title}</h4>
    <Button icon={iconBack} type="ghost" className={`${baseClass}__action`}>
      Back
    </Button>
  </header>
);

export default Header;
