// @flow

import * as React from 'react';
import classNames from 'classnames';

import IconAlert from '@images/icon-alert.svg';
import IconError from '@images/icon-error.svg';
import IconInfo from '@images/icon-info.svg';
import IconSuccess from '@images/icon-success.svg';

import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-icon`;

type IconSizes =
  | 'tiny'
  | 'small'
  | 'normal'
  | 'large'
  | 'toolbar'
  | 'thumbnail';

type IconSpacing = 'left' | 'right' | 'both';

type IconAlignment = 'top' | 'middle' | 'bottom';

const iconTypes = {
  alert: IconAlert,
  error: IconError,
  success: IconSuccess,
  info: IconInfo,
};

interface Props {
  data: any;
  type?: $Keys<typeof iconTypes>,
  size?: IconSizes;
  title?: string;
  color?: string;
  inline?: boolean;
  spacing?: IconSpacing;
  align?: IconAlignment;
  className?: string;
}

const Icon = (props: Props) => {
  const { type, size, title, color, inline, spacing, align, className } = props;

  const data = type ? iconTypes[type] : props.data;

  const Svg = data;

  const Img = (p: Props) => <img src={p.data} alt={p.title} />;

  const classes = classNames(
    baseClass,
    inline && `${baseClass}--inline`,
    size && `${baseClass}--${size}`,
    spacing && `${baseClass}--${spacing}`,
    align && `${baseClass}--${align}`,
    color && `${baseClass}--color`,
    className
  );

  return (
    <i className={classes} title={title} role="img" aria-hidden="true">
      {data && typeof data === 'string' && <Img {...props} />}
      {data &&
        typeof data !== 'string' && (
          <Svg title={title} style={color && { fill: color }} />
        )}
    </i>
  );
};

export default Icon;
