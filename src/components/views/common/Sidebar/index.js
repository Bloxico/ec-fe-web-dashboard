import { compose } from 'recompose';
import { connect } from 'react-redux';

import { isSidebarOpen } from 'src/state/selectors';
import { hideSidebar } from 'src/state/actions';
import { State } from 'src/state/state';
import withConfigSizes from '@wrappers/withConfigSizes';

import Sidebar from './Sidebar';

const mapStateToProps = (state: State) => ({
  isSidebarOpen: isSidebarOpen(state),
});

const actions = {
  hideSidebar,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withConfigSizes
)(Sidebar);
