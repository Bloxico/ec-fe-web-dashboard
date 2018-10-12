// @flow
import React, { PureComponent } from 'react';
import classNames from 'classnames';

type FormTypes = 'dialog';

type FormSizes = 'small' | 'medium' | 'large';

type PropsT = {
  type?: FormTypes,
  size?: FormSizes,
  header?: any,
  footer?: any,
  children: any,
  className?: string,
};

const baseClass = 'enrg-form';

const Header = ({ align, children }: { align: string, children: any }) => {
  const classes = classNames(
    `${baseClass}__header`,
    align && `${baseClass}__header--${align}`,
  );

  return (
    <header className={classes}>
      <h3 className="enrg-heading">{children}</h3>
    </header>
  );
};

const Footer = ({ align, children }: { align: string, children: any }) => {
  const classes = classNames(
    `${baseClass}__footer`,
    align && `${baseClass}__footer--${align}`,
  );

  return <footer className={classes}>{children}</footer>;
};

const Messages = ({ children }: { children: any }) => (
  <section className={`${baseClass}__messages`}>{children}</section>
);

const Actions = ({ children }: { children: any }) => (
  <section className={`${baseClass}__actions`}>{children}</section>
);

class Form extends PureComponent<PropsT> {
  static Header: any;
  static Footer: any;
  static Messages: any;
  static Actions: any;

  render() {
    const { type, size, header, footer, className, children } = this.props;

    const classes = classNames(
      baseClass,
      type && `${baseClass}--${type}`,
      size && `${baseClass}--${size}`,
      className,
    );

    return (
      <form
        {...this.props}
        header={null}
        footer={null}
        noValidate
        className={classes}
      >
        {header}
        <section className={`${baseClass}__body`}>{children}</section>
        {footer}
      </form>
    );
  }
}

Form.Header = Header;
Form.Footer = Footer;
Form.Messages = Messages;
Form.Actions = Actions;

export default Form;
