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

const ONE_HOUR = 24 * 60 * 60 * 1000;
const baseClass = `${THEME_PREFIX}-transactions`;

const columns = [
  {
    Header: 'Date',
    accessor: ({
      enrgAmount,
      virtualCurrencyAmount,
      virtualCurrencyCode,
      transactionStatus,
      created,
      source,
    }) => ({
      enrgAmount,
      virtualCurrencyAmount,
      virtualCurrencyCode,
      transactionStatus,
      created,
      source,
    }),
    id: 'enrgAmount',
    Cell: ({
      value: {
        enrgAmount,
        virtualCurrencyAmount,
        virtualCurrencyCode,
        transactionStatus,
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
          <span className={`${baseClass}__status`}>
            {transactionStatus && transactionStatus.toLowerCase()}
          </span>
        </div>
        <div className={`${baseClass}__row--section`}>
          {(new Date() - created < ONE_HOUR && (
            <Moment
              className={`${baseClass}__column--first`}
              date={created}
              fromNow={new Date() - created < ONE_HOUR}
            />
          )) || (
            <Moment
              className={`${baseClass}__column--first`}
              date={created}
              format="MM/DD/YYYY"
            />
          )}
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
      if (filter.value === 'CREATED') {
        return row[filter.id].transactionStatus === filter.value;
      }
      return row[filter.id].transactionsStatus === filter.value;
    },
    Filter: ({ filter, onChange }) => (
      <Select
        onChange={onChange}
        width="full"
        selected={filter ? filter.value : 'all'}
        options={{
          all: 'All statuses',
          CREATED: 'Created',
          PENDING: 'Pending',
          CANCELLED: 'Cancelled',
          CONFIRMED: 'Confirmed',
          DISPUTED: 'Disputed',
        }}
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
            data={transactions.reverse()}
            columns={columns}
          />
        )}
      </div>
    );
  }
}

export default Transactions;
