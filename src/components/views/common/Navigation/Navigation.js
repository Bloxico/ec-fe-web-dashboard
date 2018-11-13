// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

import Anchor from '@ui/Anchor';
import Icon from '@ui/Icon';

import iconDashboard from '@images/icon-dashboard.svg';
import iconTransactions from '@images/icon-transactions.svg';
import iconProfile from '@images/icon-profile.svg';
import iconHelp from '@images/icon-help.svg';
import iconSettings from '@images/icon-settings.svg';

import {
  PORTAL_PAGE,
  DASHBOARD_PAGE,
  TRANSACTIONS_PAGE,
  THEME_PREFIX,
} from 'src/constants';

interface Item {
  icon: any;
  route?: string;
  text: string;
  onClick?: Function;
}

interface Props {
  items?: Item[];
}

const baseClass = `${THEME_PREFIX}-navigation`;

const NavigationItem = ({
  route,
  icon,
  text,
  onClick = f => f
}: Item) => (
  <React.Fragment>
    {route &&
      <Link to={route} className={`${baseClass}__item`}>
        <Icon src={icon} spacing="right" color />
        {text}
      </Link>}
    {!route &&
      <Anchor className={`${baseClass}__item`} onClick={onClick}>
        <Icon src={icon} spacing="right" color />
        {text}
      </Anchor>
    }
  </React.Fragment>
);

const Navigation = (props: Props) => {
  const { items } = props;

  return (
    <nav className={baseClass}>
      {items && items.map((item: Item) =>
        <NavigationItem key={item.text} {...item} />)}

      {!items &&
        <React.Fragment>
          <NavigationItem
            route={DASHBOARD_PAGE}
            icon={iconDashboard}
            text="Dashboard"
          />
          <NavigationItem
            route={TRANSACTIONS_PAGE}
            icon={iconTransactions}
            text="Transactions"
          />
          <NavigationItem
            route={PORTAL_PAGE}
            icon={iconProfile}
            text="Profile"
          />
          <NavigationItem
            route={PORTAL_PAGE}
            icon={iconHelp}
            text="Help"
          />
          <NavigationItem
            route={PORTAL_PAGE}
            icon={iconSettings}
            text="Settings"
          />
        </React.Fragment>
      }
    </nav>
  );
};

export default Navigation;
