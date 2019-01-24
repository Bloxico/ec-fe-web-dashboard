// @flow

import React, { Component } from 'react';
import Moment from 'react-moment';

import { THEME_PREFIX } from 'src/constants';

import { Amount, Table, Loader, Anchor, Select } from '@ui';
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
    Header: 'Date',
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
        {false && (
          <Anchor
            href="desposocule!"
            target="_blank"
            className={`${baseClass}__text--tx`}
          >
            0xculecava_eb82c905fcace80865576f82b64750bc8eebb0c12c367a527b90e71
          </Anchor>
        )}
      </React.Fragment>
    ),
    filterMethod: (filter, row) => {
      if (filter.value === 'all') {
        return true;
      }
      if (filter.value === 'true') {
        return row[filter.id].enrgAmount >= 1;
      }
      return row[filter.id].enrgAmount < 1;
    },
    Filter: ({ filter, onChange }) => (
      <Select
        onChange={onChange}
        width="full"
        selected={filter ? filter.value : 'all'}
        options={{ all: 'Show All', true: 'Can Drink', false: `Can't Drink` }}
      />
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
          <Table
            filterable
            showPagination
            data={transactions}
            columns={columns}
          />
        )}
      </div>
    );
  }
}

export default Transactions;
