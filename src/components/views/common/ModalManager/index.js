import { connect } from 'react-redux';
import ModalManager from './ModalManager';

// TODO@martins Please check if all of these are valid here?
const mapStateToProps = ({
  modal: {
    modalName,
    title,
    hasClose,
    footerBtnTxt,
    align,
    data,
    autoFocus,
    className,
  },
}) => ({
  modalName,
  title,
  hasClose,
  footerBtnTxt,
  align,
  data,
  autoFocus,
  className,
});

const actions = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  actions,
)(ModalManager);
