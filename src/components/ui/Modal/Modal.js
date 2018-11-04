// @flow

import * as React from 'react';
import classNames from 'classnames';
import { Modal as BootstrapModal } from 'react-bootstrap';

import Button from '@ui/Button';
import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-modal`;

export type ModalTypes = 'compact';
export type ModalSizes = 'small' | 'medium' | 'large' | 'full' | 'auto';
export type ModalAlignment = 'left' | 'right' | 'center';
export type ModalPosition = 'top' | 'bottom' | 'middle';

interface Props {
  id?: any;
  children: any;
  header?: any;
  headerAlign?: ModalAlignment;
  title?: any;
  footer?: any;
  footerAlign?: ModalAlignment;
  hasClose?: boolean;
  show: boolean;
  size?: ModalSizes;
  align?: ModalAlignment;
  position?: ModalPosition;
  type?: ModalTypes;
  autoFocus?: boolean;
  restoreFocus?: boolean;
  enforceFocus?: boolean;
  onHide?: Function;
  className?: string;
  sticky?: boolean;
}

interface State {
  isOpen: boolean;
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Dialog = (props: any) => (
  <BootstrapModal.Dialog {...props} bsClass={baseClass} />
);

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Wrapper = (props: any) => {
  const {
    type,
    size,
    align,
    position = 'top',
    show,
    autoFocus = true,
    restoreFocus = true,
    enforceFocus = true,
    onHide,
    children,
    className,
    sticky,
  } = props;

  const classes = classNames(
    `${baseClass}__dialog`,
    type && `${baseClass}--${type}`,
    size && `${baseClass}--${size}`,
    align && `${baseClass}--${align}`,
    position && `${baseClass}--${position}`,
    className,
  );

  if (!show) {
    return null;
  }

  const handleFocus = (modal: any) => {
    if (!props.autoFocus) {
      return;
    }

    const { activeElement } = document;
    const form = modal.querySelector('form');

    // Auto focus to the first form element if autoFocus is set
    if (form) {
      const fields = [...form.elements];
      const hasActive = fields.find(field => field === activeElement);

      if (!hasActive) {
        fields[0].focus();
      }
    }
  };

  const backdrop = sticky ? 'static' : undefined;

  return (
    <BootstrapModal
      show={show}
      autoFocus={autoFocus}
      // @ts-ignore
      restoreFocus={restoreFocus}
      enforceFocus={enforceFocus}
      onHide={onHide}
      onEntered={handleFocus}
      backdrop={backdrop}
      // $FlowIssue
      dialogComponentClass={Dialog}
      backdropClassName={`${baseClass}__backdrop`}
      dialogClassName={classes}
    >
      {children}
    </BootstrapModal>
  );
};

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Header = (props: any) => {
  const { type, headerAlign, hasClose = true, children } = props;

  const classes = classNames(
    `${baseClass}__header`,
    type && `${baseClass}--${type}`,
    headerAlign && `${baseClass}--${headerAlign}`,
  );

  return (
    <BootstrapModal.Header closeButton={hasClose} bsClass={classes}>
      {children}
    </BootstrapModal.Header>
  );
};

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Title = (props: any) => {
  const { align, children } = props;

  const classes = classNames(
    `${baseClass}__title`,
    align && `${baseClass}--${align}`,
  );

  return (
    // @ts-ignore
    <BootstrapModal.Title componentClass="h3" bsClass={classes}>
      {children}
    </BootstrapModal.Title>
  );
};

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Close = (props: any) => {
  const { text = 'Close', onClick } = props;

  const classes = classNames(`${baseClass}__close`);

  return (
    <Button icon className={classes} onClick={onClick}>
      {text}
    </Button>
  );
};

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Body = (props: any) => {
  const { type, align, children } = props;

  const classes = classNames(
    `${baseClass}__body`,
    type && `${baseClass}--${type}`,
    align && `${baseClass}--${align}`,
  );

  return (
    // @ts-ignore
    <BootstrapModal.Body bsClass={classes}>{children}</BootstrapModal.Body>
  );
};

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Footer = (props: any) => {
  const { type, footerAlign, className, children } = props;
  const classes = classNames(
    `${baseClass}__footer`,
    type && `${baseClass}--${type}`,
    footerAlign && `${baseClass}--${footerAlign}`,
    className,
  );

  return (
    // @ts-ignore
    <BootstrapModal.Footer componentClass="footer" bsClass={classes}>
      {children}
    </BootstrapModal.Footer>
  );
};

/**
 *
 *
 */
class Modal extends React.PureComponent<Props, State> {
  static defaultProps = {
    hasClose: true,
  };

  static Header: any;
  static Title: any;
  static Body: any;
  static Footer: any;

  constructor(props: Props) {
    super(props);

    this.state = { isOpen: props.show };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.show !== nextProps.show) {
      this.setState(state => ({ ...state, isOpen: nextProps.show }));
    }
  }

  handleClose = () => {
    this.setState(state => ({ ...state, isOpen: false }));
    this.handleHide();
  };

  handleHide = () => {
    const { id = Symbol('Modal'), onHide = f => f } = this.props;

    onHide(id);
  };

  render() {
    const {
      type,
      title,
      header,
      hasClose,
      footer,
      children,
      headerAlign,
    } = this.props;

    return (
      <Wrapper
        {...this.props}
        show={this.state.isOpen}
        onHide={this.handleHide}
      >
        {header}
        {!header && !title && hasClose && <Close onClick={this.handleClose} />}
        {!header &&
          title &&
          hasClose && (
            <Header headerAlign={headerAlign} hasClose={hasClose}>
              <Title headerAlign={headerAlign}>{title}</Title>
            </Header>
          )}
        <Body type={type}>{children}</Body>
        {footer}
      </Wrapper>
    );
  }
}

Modal.Header = Header;
Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
