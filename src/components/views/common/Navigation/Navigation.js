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
  BLOXICO_CONTACT,
} from 'src/constants';

type Item = {
  icon: any,
  route?: string,
  text: string,
  href?: string,
  id?: string,
  target?: string,
  onClick?: any,
};

type Props = {
  MSGDashboard: string,
  MSGTransactions: string,
  MSGProfile: string,
  MSGHelp: string,
  items?: Item[],
  handleHide?: Function,
};

const baseClass = `${THEME_PREFIX}-navigation`;

const NavigationItem = ({
  route,
  icon,
  text,
  onClick = f => f,
  href,
  target,
  id,
}: Item) => (
  <React.Fragment>
    {route && (
      <Link id={id} to={route} onClick={onClick} className={`${baseClass}__item`}>
        <Icon src={icon} spacing="right" color />
        {text}
      </Link>
    )}
    {!route && (
      <Anchor
        className={`${baseClass}__item`}
        href={href}
        id={id}
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
  const {
    MSGDashboard,
    MSGTransactions,
    MSGProfile,
    MSGHelp,
    items,
    handleHide,
  } = props;

  return (
    <nav className={baseClass}>
      {items &&
        items.map((item: Item) => <NavigationItem key={item.text} {...item} />)}

      {!items && (
        <React.Fragment>
          <NavigationItem
            route={DASHBOARD_PAGE}
            icon={iconDashboard}
            text={MSGDashboard}
            onClick={handleHide}
            id="nav_1"
          />
          <NavigationItem
            route={TRANSACTIONS_PAGE}
            icon={iconTransactions}
            text={MSGTransactions}
            onClick={handleHide}
            id="nav_2"
          />
          <NavigationItem
            route={EDIT_PROFILE}
            icon={iconProfile}
            text={MSGProfile}
            onClick={handleHide}
            id="nav_3"
          />
          <NavigationItem
            href={BLOXICO_CONTACT}
            target="_blank"
            icon={iconHelp}
            text={MSGHelp}
            id="nav_4"
          />
        </React.Fragment>
      )}
    </nav>
  );
};

export default Navigation;
