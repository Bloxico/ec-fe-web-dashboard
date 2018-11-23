// @flow

import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { injectIntl } from 'react-intl';

import { fetchTransactions } from 'src/state/actions';
import {
  getTransactionsData,
  isFetchTransactionInProgress,
} from 'src/state/selectors';

import messages from './messages';
import Transactions from './Transactions';

const actions = {
  fetchTransactions,
};

// eslint-disable-next-line
const mapStateToProps = state => ({
  transactions: getTransactionsData(state),
  fetchTransactionsInProgress: isFetchTransactionInProgress(state),
});

export default compose(
  injectIntl,
  connect(
    mapStateToProps,
    actions,
  ),
  withProps(({ intl: { formatMessage } }) => ({
    MSGTransactions: formatMessage(messages.transactions),
  })),
)(Transactions);
