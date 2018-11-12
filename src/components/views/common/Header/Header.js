import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@ui/Button';
import iconBack from '@images/icon-back.svg';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-header`;

export type PropsT = {
  title: string,
  history: any,
};

const Header = ({ title, history }: PropsT) => (
  <header className={baseClass}>
    <h4 className={`${baseClass}__title`}>{title}</h4>
    <Button
      icon={iconBack}
      onClick={history.goBack}
      type="ghost"
      className={`${baseClass}__action`}
    >
      Back
    </Button>
  </header>
);

export default withRouter(Header);
