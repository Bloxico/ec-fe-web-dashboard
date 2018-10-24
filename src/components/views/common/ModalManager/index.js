import { connect } from 'react-redux';
import ModalManager from './ModalManager';

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
