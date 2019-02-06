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
    MSGAllStatuses: formatMessage(messages.allStatuses),
    MSGCreated: formatMessage(messages.created),
    MSGPending: formatMessage(messages.pending),
    MSGCancelled: formatMessage(messages.cancelled),
    MSGConfirmed: formatMessage(messages.confirmed),
    MSGDisputed: formatMessage(messages.disputed),
    MSGNoData: formatMessage(messages.noData),
    MSGENRG: formatMessage(messages.energyShort),
    MSGDate: formatMessage(messages.date),
  })),
)(Transactions);
