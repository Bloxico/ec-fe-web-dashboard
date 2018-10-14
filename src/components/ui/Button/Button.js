// @flow

// TODO@all fix lint error. Rule temporarily disabled because it clutters eslint output.
/* eslint-disable react/require-default-props */

import React, { PureComponent } from 'react';
import classNames from 'classnames';

// import Icon from '@components/Icon';
// import svgBusy from '@images/icon-sync.svg';

const baseClass = 'enrg-button';

export type ButtonTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'ghost'
  | 'link';

export type ButtonColors =
  | 'success'
  | 'warning'
  | 'alert'
  | 'info'
  | 'inverse'
  | 'white';

export type ButtonShapes = 'round' | 'pill';

export type ButtonSizes = 'small' | 'large' | 'full';

export type ButtonWidths = 'wide' | 'fixed' | 'full';

export type ButtonActions = 'button' | 'submit' | 'reset';

type PropsT = {
  id?: string,
  action?: ButtonActions,
  busy?: boolean | null,
  icon?: any,
  disabled?: boolean,
  hidden?: boolean,
  pressed?: boolean,
  tabIndex?: number,
  type?: ButtonTypes,
  color?: ButtonColors,
  shape?: ButtonShapes,
  size?: ButtonSizes,
  width?: ButtonWidths,
  value?: any,
  inputRef?: any,
  data: any,
  aria: any,
  children: any,
  onClick?: Function,
  className?: string,
};

const createAttributes = type => data =>
  Object.keys(data).reduce(
    // $FlowIssue
    (acc, attr) => ({ ...acc, [`${type}-${attr}`]: data[attr] }),
    {},
  );

const dataAttributes = createAttributes('data');
const ariaAttributes = createAttributes('aria');

class Button extends PureComponent<PropsT> {
  static defaultProps = {
    data: {},
    aria: {},
  };

  render() {
    const {
      id,
      action = 'button',
      busy,
      disabled,
      hidden,
      pressed,
      icon,
      tabIndex,
      type,
      color,
      shape,
      size,
      width,
      value,
      inputRef,
      data,
      aria,
      onClick,
      children,
      className,
    } = this.props;

    const classes =
      type === 'link'
        ? classNames(
            'enrg-link',
            icon && `enrg-link--icon`,
            width && `enrg-link--${width}`,
            size && `enrg-link--${size}`,
            className,
          )
        : classNames(
            baseClass,
            icon && `${baseClass}--icon`,
            type && `${baseClass}--${type}`,
            color && `${baseClass}--${color}`,
            shape && `${baseClass}--${shape}`,
            width && `${baseClass}--${width}`,
            size && `${baseClass}--${size}`,
            className,
          );

    return (
      <button
        id={id}
        type={action}
        aria-busy={busy}
        disabled={busy || disabled}
        hidden={hidden}
        aria-pressed={pressed}
        tabIndex={tabIndex}
        value={value}
        ref={inputRef}
        onClick={onClick}
        className={classes}
        {...dataAttributes(data)}
        {...ariaAttributes(aria)}
      >
        {!busy &&
          icon &&
          typeof icon !== 'boolean' &&
          typeof busy !== 'boolean'}
        {typeof busy === 'boolean'}
        {children}
      </button>
    );
  }
}

export default Button;
