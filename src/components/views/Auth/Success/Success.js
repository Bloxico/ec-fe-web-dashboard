// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import SuccessSVG from '@images/success.svg';
import { LOGIN_PAGE, THEME_PREFIX } from 'src/constants';

export type Props = {
  MSGSuccess: string,
  MSGSuccessfullyResetPass: string,
  MSGSignIn: string,
};

const baseClass = `${THEME_PREFIX}-success`;

const classes = classNames(baseClass);
const btnClasses = classNames(
  `${THEME_PREFIX}-button`,
  `${THEME_PREFIX}-button--primary`,
  `${THEME_PREFIX}-button--wide`,
  `${THEME_PREFIX}-button--large`,
);

const Success = ({
  MSGSuccess,
  MSGSuccessfullyResetPass,
  MSGSignIn,
}: Props) => (
  <div className={classes}>
    <SuccessSVG />
    <h4>{MSGSuccess}</h4>
    <p>{MSGSuccessfullyResetPass}</p>
    <br />
    <Link to={LOGIN_PAGE} className={btnClasses}>
      {MSGSignIn}
    </Link>
  </div>
);

export default Success;
