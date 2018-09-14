import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { login } from 'src/state/actionCreators';

import Auth, { PropsT } from './Auth';

const mapStateToProps = ({
  auth: {
    login: { inProgress },
  },
}) => ({ isLoginInProgress: inProgress });

const actions = {
  login,
};

export default compose(
  connect(
    mapStateToProps,
    actions,
  ),
  withHandlers({
    handleLoginClick: ({ login }: PropsT) => () => {
      login();
    },
  }),
)(Auth);
