// @flow

import React from 'react';

import Modal from 'src/components/ui/Modal';
import { hideModal } from 'src/state/actions';
import { MODALS } from 'src/constants';
import {
  ModalTypes,
  ModalSizes,
  ModalPosition,
  ModalAlignment,
} from '@ui/Modal';

import ErrorMessage from './ErrorMessage';

interface Props {
  modalName: string;
  title?: string;
  hasClose?: boolean;
  header?: any;
  footer?: any;
  type?: ModalTypes;
  align?: ModalAlignment;
  position?: ModalPosition;
  size?: ModalSizes;
  data?: any;
  autoFocus?: boolean;
  restoreFocus?: boolean;
  enforceFocus?: boolean;
  className?: string;
  onHideActions?: any[];
  dispatch: Function;
  headerAlign?: ModalAlignment;
  sticky?: boolean;
}

const modals = {
  [MODALS.ErrorMessage]: ErrorMessage,
};

const ModalManager = (props: Props) => {
  const {
    modalName,
    type,
    title = '',
    hasClose = true,
    header = null,
    footer = null,
    size = 'small',
    align = 'center',
    position = 'top',
    headerAlign = 'center',
    data = null,
    autoFocus = true,
    restoreFocus = true,
    enforceFocus = true,
    className,
    onHideActions,
    dispatch,
    sticky,
  } = props;

  const ModalContent = modals[modalName];

  const handleOnHide = () => {
    if (onHideActions) {
      onHideActions.forEach(action => {
        dispatch(action);
      });
    }

    dispatch(hideModal());
  };

  return (
    <Modal
      title={title}
      hasClose={hasClose}
      header={header}
      footer={footer}
      show={!!modalName}
      onHide={handleOnHide}
      type={type}
      size={size}
      align={align}
      position={position}
      autoFocus={autoFocus}
      restoreFocus={restoreFocus}
      enforceFocus={enforceFocus}
      className={className}
      sticky={sticky}
      headerAlign={headerAlign}
    >
      {ModalContent && <ModalContent {...data} />}
    </Modal>
  );
};

export default ModalManager;
