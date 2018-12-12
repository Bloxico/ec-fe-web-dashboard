// @flow

import React, { Component } from 'react';
import { FormattedDate } from 'react-intl';

import { THEME_PREFIX } from 'src/constants';

import { Amount, Table, Loader } from '@ui';
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
    accessor: ({
      enrgAmount,
      virtualCurrencyAmount,
      virtualCurrencyCode,
    }) => ({
      enrgAmount,
      virtualCurrencyAmount,
      virtualCurrencyCode,
    }),
    id: 'enrgAmount',
    Cell: ({
      value: { enrgAmount, virtualCurrencyAmount, virtualCurrencyCode },
    }: any) => (
      <React.Fragment>
        <h5 className={`${baseClass}__virtual-amount`}>
          {virtualCurrencyCode} {virtualCurrencyAmount}
        </h5>
        <Amount value={enrgAmount} className={`${baseClass}__enrg-amount`} />
      </React.Fragment>
    ),
  },
  {
    Header: 'Date',
    accessor: 'created',
    Cell: ({ value }: any) => (
      <FormattedDate value={value}>
        {(date: string) => <span className={`${baseClass}__date`}>{date}</span>}
      </FormattedDate>
    ),
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: ({ value }: any) => (
      <span className={`${baseClass}__source`}>{value}</span>
    ),
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
