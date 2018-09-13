import React  from 'react';
import { Link} from 'react-router-dom';

import {AUTH_PAGE, PORTAL_PAGE, THEME_PREFIX} from "../../../../constants";
import logo from '../../../../logo.svg';

import './Header.scss';

const baseClass = `${THEME_PREFIX}-header`;

const Header = () => (
  <header className={baseClass}>
    <img src={logo} className={`${baseClass}__logo`} alt="logo"/>
    <h1 className={`${baseClass}__title`}>React App</h1>
    <nav className={`${baseClass}__nav`}>
      <ul>
        <li>
          <Link to={PORTAL_PAGE}>Portal</Link>
        </li>
        <li>
          <Link to={AUTH_PAGE}>Auth</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
