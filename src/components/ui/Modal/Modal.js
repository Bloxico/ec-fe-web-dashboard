// @flow
/* eslint react/sort-comp: 0 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import {
  Modal as BootstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Button } from '@ui';

const baseClass = 'enrg-modal';

export type ModalAlignment = 'left' | 'right' | 'center';

export type ModalPosition = 'top' | 'bottom' | 'middle';

type PropsT = {
  id?: any,
  children: any,
  headerAlign?: ModalAlignment,
  title?: any,
  footerBtnTxt?: any,
  footerAlign?: ModalAlignment,
  hasClose: boolean,
  show: boolean,
  align?: ModalAlignment,
  position?: ModalPosition,
  autoFocus?: boolean,
  onHide?: Function,
  className?: string,
};

type StateT = {
  isOpen: boolean,
};

const Wrapper = (props: any) => {
  const { align, show, autoFocus, onHide, children, className } = props;

  const classes = classNames(
    `${baseClass}__dialog`,
    align && `${baseClass}--${align}`,
    className,
  );

  if (!show) {
    return null;
  }

  const centered = true;

  return (
    <BootstrapModal
      isOpen={show}
      autoFocus={autoFocus}
      toggle={onHide}
      className={classes}
      centered={centered}
      backdropClassName="enrg-modal__backdrop"
    >
      {children}
    </BootstrapModal>
  );
};

const Close = (props: any) => {
  const { text = '', onClick } = props;

  const classes = classNames(`${baseClass}__close`);

  return (
    <Button icon className={classes} onClick={onClick}>
      {text}
    </Button>
  );
};

const FooterClose = (props: any) => {
  const { text, onClick } = props;

  return (
    <Button type="full" onClick={onClick}>
      {text}
    </Button>
  );
};

const Header = (props: any) => {
  const { align, onHide, children, close } = props;

  const classes = classNames(
    `${baseClass}__header`,
    align && `${baseClass}--${align}`,
  );

  return (
    <ModalHeader
      close={close}
      className={classes}
      align={align}
      toggle={onHide}
    >
      {children}
    </ModalHeader>
  );
};

const Title = (props: any) => {
  const { align, children } = props;

  const classes = classNames(
    `${baseClass}__title`,
    align && `${baseClass}--${align}`,
  );

  return (
    <div className={classes} align={align}>
      {children}
    </div>
  );
};

const Body = (props: any) => {
  const { align, children } = props;

  const classes = classNames(
    `${baseClass}__body`,
    align && `${baseClass}--${align}`,
  );

  return (
    <ModalBody align={align} className={classes}>
      {children}
    </ModalBody>
  );
};

const Footer = (props: any) => {
  const { align, children } = props;

  const classes = classNames(
    `${baseClass}__footer`,
    align && `${baseClass}--${align}`,
  );

  return (
    <ModalFooter className={classes} align={align}>
      {children}
    </ModalFooter>
  );
};

class Modal extends PureComponent<PropsT, StateT> {
  constructor(props: PropsT) {
    super(props);

    this.state = { isOpen: props.show };
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (this.props.show !== nextProps.show) {
      this.setState(state => ({ ...state, isOpen: nextProps.show }));
    }
  }

  handleHide = () => {
    const { id = Symbol('Modal'), onHide = f => f } = this.props;

    onHide(id);
    this.setState(state => ({ ...state, isOpen: false }));
  };

  render() {
    const {
      align,
      title,
      hasClose,
      footerBtnTxt,
      children,
      footerAlign,
    } = this.props;

    return (
      <Wrapper
        {...this.props}
        show={this.state.isOpen}
        onHide={this.handleHide}
      >
        <Header onHide={this.handleHide} close={null} align={align}>
          <Title align={align}>{title}</Title>
          {hasClose && <Close onClick={this.handleHide} />}
        </Header>

        <Body align={align}>{children}</Body>
        <Footer align={footerAlign}>
          {footerBtnTxt && (
            <FooterClose text={footerBtnTxt} onClick={this.handleHide} />
          )}
        </Footer>
      </Wrapper>
    );
  }
}

export default Modal;
