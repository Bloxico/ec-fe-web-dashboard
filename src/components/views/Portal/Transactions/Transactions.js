// @flow

import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';

import { THEME_PREFIX } from 'src/constants';

import { Table, Loader } from '@ui';
import Header from '@partials/Header';

export type Props = {
  MSGTransactions: string,
  transactions: [],
  fetchTransactions: Function,
  fetchTransactionsInProgress: boolean,
};

const baseClass = `${THEME_PREFIX}-transactions`;
const columns = [
  {
    Header: 'Amount',
    accessor: ({ enrgAmount, virtualCurrencyAmmount }) => ({
      enrgAmount,
      virtualCurrencyAmmount,
    }),
    id: 'enrgAmount',
    Cell: ({ value: { enrgAmount, virtualCurrencyAmmount } }: any) => (
      <div>
        <div className={`${baseClass}__virtual-amount`}>
          BB {virtualCurrencyAmmount}
        </div>
        <div className={`${baseClass}__enrg-amount`}>ENRG {enrgAmount}</div>
      </div>
    ),
  },
  {
    Header: 'Date',
    accessor: 'created',
    Cell: ({ value }: any) => (
      <span className={`${baseClass}__date`}>
        <FormattedDate v value={value} />
      </span>
    ),
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: () => <span className={`${baseClass}__source`}>Ring-ring</span>,
  },
];

class Transactions extends Component<Props> {
  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  render() {
    const {
      MSGTransactions,
      transactions,
      fetchTransactionsInProgress,
    } = this.props;

    return (
      <div className={baseClass}>
        <Header action="menu" title={MSGTransactions} />
        {fetchTransactionsInProgress && <Loader />}
        {!fetchTransactionsInProgress && (
          <Table showPagination data={transactions} columns={columns} />
        )}
      </div>
    );
  }
}

export default Transactions;
