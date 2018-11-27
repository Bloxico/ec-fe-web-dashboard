// @flow
/* eslint react/sort-comp: 0 */

import React, { PureComponent } from 'react';
import Swipeable from 'react-swipeable';
import classNames from 'classnames';
import { Modal as BootstrapModal } from 'react-bootstrap';

import { THEME_PREFIX } from 'src/constants';

const baseClass = `${THEME_PREFIX}-sidebar`;

export type SidebarPosition = 'left' | 'right';

type Props = {
  children: any,
  className?: string,
  onHide?: Function,
  position?: SidebarPosition,
  show: boolean,
  sticky?: boolean,
  className?: string,
};

interface State {
  isOpen: boolean;
}

const Panel = (props: any) => (
  <BootstrapModal.Dialog
    {...props}
    show={null}
    bsClass={baseClass}
    style={{ opacity: 0 }}
  />
);

/**
 *
 *
 */
class Sidebar extends PureComponent<Props, State> {
  static defaultProps = {
    position: 'left',
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: props.show,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.show !== nextProps.show) {
      this.setState(state => ({ ...state, isOpen: nextProps.show }));
    }
  }

  handleHide = () => this.setState({ isOpen: false });

  handleExited = () => this.props.onHide && this.props.onHide();

  handleSwiped = (e: any, deltaX: number) => deltaX > 0 && this.handleExited();

  render() {
    const { children, className, position, sticky } = this.props;

    const classes = classNames(
      `${baseClass}__panel`,
      position && `${baseClass}--${position}`,
      className,
    );

    const backdrop = sticky ? 'static' : true;

    return (
      <BootstrapModal
        show={this.state.isOpen}
        onHide={this.handleHide}
        backdrop={backdrop}
        backdropClassName={`${baseClass}__backdrop`}
        dialogComponentClass={Panel}
        dialogClassName={classes}
        restoreFocus={false}
        className={className}
        onExited={this.handleExited}
      >
        <Swipeable
          onSwiped={this.handleSwiped}
          className={`${baseClass}__swipeable`}
        >
          {children}
        </Swipeable>
      </BootstrapModal>
    );
  }
}

export default Sidebar;
