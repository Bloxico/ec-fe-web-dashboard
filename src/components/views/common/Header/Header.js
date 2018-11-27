import React from 'react';

import { Button, Icon } from '@ui';

import iconBack from '@images/icon-back.svg';
import iconMenu from '@images/icon-menu.svg';

import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-header`;

type ActionType = 'menu' | 'back';

export interface Props {
  action: ActionType;
  title: string;
  history: any;
  isSidebarOpen: boolean;
  showSidebar: Function;
  hideSidebar: Function;
}

const Action = (props: Props) => {
  const {
    action = 'back',
    history: { goBack },
    showSidebar,
  } = props;

  const getIcon = () => (action === 'menu' ? iconMenu : iconBack);

  const getText = () => (action === 'menu' ? 'Menu' : 'Back');

  const handleClick = () => (action === 'menu' ? showSidebar() : goBack());

  return (
    <Button
      size="large"
      type="ghost"
      title={getText()}
      tabIndex={-1}
      onClick={handleClick}
      className={`${baseClass}__action`}
    >
      <Icon src={getIcon()} color />
    </Button>
  );
};

const Header = (props: Props) => {
  const { title } = props;

  return (
    <header className={baseClass}>
      <Action {...props} />
      <h4 className={`${baseClass}__title`}>{title}</h4>
    </header>
  );
};

export default Header;
