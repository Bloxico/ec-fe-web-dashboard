// @flow

import React from 'react';
import Modal from 'src/components/ui/Modal';
import { hideModal } from 'src/state/actions';

import type { ModalAlignment } from 'src/components/ui/Modal/Modal';

type PropsT = {
  modalName: string | undefined,
  title?: string,
  hasClose?: boolean,
  align?: ModalAlignment,
  data?: any,
  autoFocus?: boolean,
  className?: string,
  footerBtnTxt?: string,
  onHideActions: Array<Object> | undefined,
  dispatch: Function,
};

const ModalManager = (props: PropsT) => {
  const {
    modalName,
    title,
    hasClose,
    align,
    footerBtnTxt,
    data,
    autoFocus,
    className,
    onHideActions,
    dispatch,
  } = props;

  // const ModalContent = modals[modalName];

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
      show={!!modalName}
      onHide={handleOnHide}
      align={align}
      footerBtnTxt={footerBtnTxt}
      autoFocus={autoFocus}
      className={className}
    >
      {data}
    </Modal>
  );
};

ModalManager.defaultProps = {
  title: '',
  hasClose: false,
  align: 'center',
  data: null,
  autoFocus: false,
  footerBtnTxt: '',
  className: undefined,
};

export default ModalManager;
