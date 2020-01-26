// @flow

import React from 'react';
import classNames from 'classnames';

import { Icon, Output } from '@ui';
import IconEnergy from '@images/icon-energy.svg';

import { THEME_PREFIX } from 'src/constants';

export type AmountSize = 'small' | 'normal' | 'large' | 'huge';
export type AmountAlign = 'left' | 'right';
export type AmountCurrency = 'energy';

const currencyIcons = {
  energy: IconEnergy,
};

const baseClass = `${THEME_PREFIX}-amount`;

interface Props {
  value: number;
  precision?: number;
  currency: string;
  showIcon?: boolean;
  showCurrency?: boolean;
  align?: AmountAlign;
  size?: AmountSize;
  className?: string;
}

const getIcon = (currency: string, size: AmountSize = 'normal'): any => {
  const iconSizes: any = {
    huge: 'large',
    large: 'small',
    normal: 'small',
    small: 'tiny',
  };

  return (
    <Icon
      src={currencyIcons[currency]}
      size={iconSizes[size]}
      color="unset"
      className={`${baseClass}__icon`}
    />
  );
};

const Amount = (props: Props) => {
  const {
    value,
    precision = 0,
    currency,
    showIcon = false,
    showCurrency = true,
    size,
    align = 'left',
    className,
  } = props;

  const classes = classNames(
    baseClass,
    size && `${baseClass}--${size}`,
    align && `${baseClass}--${align}`,
    className,
  );

  return (
    <span className={classes}>
      {showIcon && getIcon(currency, size)}
      {!showIcon && showCurrency && (
        <span className={`${baseClass}__sign`}>{currency || 'ENRG'}</span>
      )}
      <Output
        value={`${value}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, $1 => `${$1} `)}
        precision={precision}
        format="float"
        className={`${baseClass}__value`}
      />
    </span>
  );
};

export default Amount;
