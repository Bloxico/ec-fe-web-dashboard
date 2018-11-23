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
    accessor: 'enrgAmount',
    id: 'enrgAmount',
    Cell: ({ value }: any) => <span>ENRG {value}</span>,
  },
  {
    Header: 'Date',
    accessor: 'created',
    Cell: ({ value }: any) => <FormattedDate v value={value} />,
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: () => <span>Ring-ring</span>,
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
