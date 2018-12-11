import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { State } from 'src/state/state';
import { showSidebar, hideSidebar } from 'src/state/actions';
import { isSidebarOpen } from 'src/state/selectors';

import Header from './Header';

const actions = {
  showSidebar,
  hideSidebar,
};

const mapStateToProps = (state: State) => ({
  isSidebarOpen: isSidebarOpen(state),
});

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  withRouter,
)(Header);
