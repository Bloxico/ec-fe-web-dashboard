// @flow

import React, { Component } from 'react';
import Moment from 'react-moment';

import { THEME_PREFIX } from 'src/constants';

import { Amount, Table, Loader, Anchor } from '@ui';
import Header from '@partials/Header';

export type Props = {
  MSGTransactions: string,
  transactions: [],
  fetchTransactions: Function,
  fetchTransactionsInProgress: boolean,
};

const ONE_HOUR = 60 * 60 * 1000;
const baseClass = `${THEME_PREFIX}-transactions`;

const columns = [
  {
    Header: 'Amount',
    accessor: ({
      enrgAmount,
      virtualCurrencyAmount,
      virtualCurrencyCode,
      created,
      source,
    }) => ({
      enrgAmount,
      virtualCurrencyAmount,
      virtualCurrencyCode,
      created,
      source,
    }),
    id: 'enrgAmount',
    Cell: ({
      value: {
        enrgAmount,
        virtualCurrencyAmount,
        virtualCurrencyCode,
        created,
        source,
      },
    }: any) => (
      <React.Fragment>
        <div className={`${baseClass}__row--section`}>
          <div className={`${baseClass}__column--first`}>
            <h5 className={`${baseClass}__amount`}>
              +ENRG {enrgAmount}
              <span className={`${baseClass}__virtual-amount`}>
                (
                <Amount
                  currency={virtualCurrencyCode}
                  value={virtualCurrencyAmount}
                />
                )
              </span>
            </h5>
          </div>
          <span>Created</span>
        </div>
        <div className={`${baseClass}__row--section`}>
          <Moment
            className={`${baseClass}__column--first`}
            date={created}
            format="MM/DD/YYYY"
            fromNow={new Date() - created < ONE_HOUR}
          />
          <span className={`${baseClass}__source`}>{source}</span>
        </div>
        <Anchor
          href="desposocule!"
          target="_blank"
          className={`${baseClass}__text--tx`}
        >
          0xculecava_eb82c905fcace80865576f82b64750bc8eebb0c12c367a527b90e71
        </Anchor>
      </React.Fragment>
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
