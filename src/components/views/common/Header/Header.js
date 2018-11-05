import React from 'react';

import Button from '@ui/Button';
import iconBack from '@images/icon-back.svg';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-header`;

export type PropsT = {
  title: string,
  handleBack: Function,
};

const Header = ({ title, handleBack }: PropsT) => (
  <header className={baseClass}>
    <h4 className={`${baseClass}__title`}>{title}</h4>
    <Button
      icon={iconBack}
      onClick={handleBack}
      type="ghost"
      className={`${baseClass}__action`}
    >
      Back
    </Button>
  </header>
);

export default Header;
