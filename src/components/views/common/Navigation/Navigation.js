// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import Anchor from '@ui/Anchor';
import Icon from '@ui/Icon';

import iconDashboard from '@images/icon-dashboard.svg';
import iconTransactions from '@images/icon-transactions.svg';
import iconProfile from '@images/icon-profile.svg';
import iconHelp from '@images/icon-help.svg';

import {
  DASHBOARD_PAGE,
  TRANSACTIONS_PAGE,
  EDIT_PROFILE,
  THEME_PREFIX,
} from 'src/constants';

interface Item {
  icon: any;
  route?: string;
  text: string;
  href?: string;
  target?: string;
  onClick?: any;
}

interface Props {
  items?: Item[];
  handleHide?: Function;
}

const baseClass = `${THEME_PREFIX}-navigation`;

const NavigationItem = ({
  route,
  icon,
  text,
  onClick = f => f,
  href,
  target,
}: Item) => (
  <React.Fragment>
    {route && (
      <Link to={route} onClick={onClick} className={`${baseClass}__item`}>
        <Icon src={icon} spacing="right" color />
        {text}
      </Link>
    )}
    {!route && (
      <Anchor
        className={`${baseClass}__item`}
        href={href}
        target={target}
        onClick={onClick}
      >
        <Icon src={icon} spacing="right" color />
        {text}
      </Anchor>
    )}
  </React.Fragment>
);

const Navigation = (props: Props) => {
  const { items, handleHide } = props;

  return (
    <nav className={baseClass}>
      {items &&
        items.map((item: Item) => <NavigationItem key={item.text} {...item} />)}

      {!items && (
        <React.Fragment>
          <NavigationItem
            route={DASHBOARD_PAGE}
            icon={iconDashboard}
            text="Dashboard"
            onClick={handleHide}
          />
          <NavigationItem
            route={TRANSACTIONS_PAGE}
            icon={iconTransactions}
            text="Transactions"
            onClick={handleHide}
          />
          <NavigationItem
            route={EDIT_PROFILE}
            icon={iconProfile}
            text="Profile"
            onClick={handleHide}
          />
          <NavigationItem
            href="http://bloxico.com/contact/"
            target="_blank"
            icon={iconHelp}
            text="Help"
          />
        </React.Fragment>
      )}
    </nav>
  );
};

export default Navigation;
