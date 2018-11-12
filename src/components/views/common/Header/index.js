import { connect } from 'react-redux';
import { compose } from 'recompose';

import { showSidebar } from 'src/state/actions';

import Header from './Header';

const actions = {
  showSidebar,
};

const mapStateToProps = () => ({});

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
)(Header);
