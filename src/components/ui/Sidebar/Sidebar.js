// @flow
/* eslint react/sort-comp: 0 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Modal as BootstrapModal } from 'react-bootstrap';

import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-sidebar`;

type SidebarTypes = 'compact';

type SidebarAlignment = 'left' | 'right' | 'center';

type SidebarPosition = 'left' | 'right';

type Props = {
  id?: string,
  children: any,
  align?: SidebarAlignment,
  show: boolean,
  position?: SidebarPosition,
  type?: SidebarTypes,
  onHide: Function,
  className?: string,
};

const Panel = (props: Props) => {
  const { position = 'right' } = props;

  return (
    <BootstrapModal.Dialog
      {...props}
      align={null}
      position={null}
      bsClass={baseClass}
      data-position={position}
    />
  );
};

const Wrapper = (props: Props) => {
  const { type } = props;

  const classes = classNames(
    `${baseClass}__panel`,
    type && `${baseClass}--${type}`,
  );

  return (
    <BootstrapModal
      {...props}
      // $FlowIssue
      dialogComponentClass={Panel}
      backdropClassName={`${baseClass}__backdrop`}
      dialogClassName={classes}
    />
  );
};

const Header = (props: Props) => {
  const { type, align = 'left' } = props;

  const classes = classNames(
    `${baseClass}__header`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`,
  );

  return (
    <BootstrapModal.Header
      {...props}
      type={null}
      align={null}
      bsClass={classes}
    />
  );
};

const Body = (props: Props) => {
  const { type, align } = props;

  const classes = classNames(
    `${baseClass}__body`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`,
  );

  return (
    <BootstrapModal.Body
      {...props}
      type={null}
      align={null}
      bsClass={classes}
    />
  );
};

const Footer = (props: Props) => {
  const { type, align = 'right' } = props;

  const classes = classNames(
    `${baseClass}__footer`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`,
  );

  return (
    <BootstrapModal.Footer
      {...props}
      type={null}
      align={null}
      componentClass="footer"
      bsClass={classes}
    />
  );
};

class Sidebar extends PureComponent<Props> {
  static defaultProps = {
    position: 'right',
  };

  static Header: any;
  static Body: any;
  static Footer: any;

  handleClose: Function;

  constructor(props: Props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { id = Symbol('Sidebar'), onHide = f => f } = this.props;

    onHide(id);
  }

  render() {
    const { show, align, position = 'right', children } = this.props;

    return (
      <Wrapper
        {...this.props}
        show={show}
        align={align}
        position={position}
        autoFocus
        onHide={this.handleClose}
      >
        {children}
      </Wrapper>
    );
  }
}

Sidebar.Header = Header;
Sidebar.Body = Body;
Sidebar.Footer = Footer;

export default Sidebar;
