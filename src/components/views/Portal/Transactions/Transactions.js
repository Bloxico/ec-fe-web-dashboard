// @flow

import React, { Component } from 'react';
import Moment from 'react-moment';

import {
  THEME_PREFIX,
  TRANSACTION_CREATED,
  TRANSACTION_PENDING,
  TRANSACTION_CANCELLED,
  TRANSACTION_CONFIRMED,
  TRANSACTION_DISPUTED,
  SERBIAN_LANG,
  SERBIAN_MOMENT_LANG,
  ENGLISH_LANG,
  ENGLISH_MOMENT_LANG,
} from 'src/constants';

import { Amount, Table, Loader, Select } from '@ui';
import Header from '@partials/Header';

export type Props = {
  MSGTransactions: string,
  MSGAllStatuses: string,
  MSGCreated: string,
  MSGPending: string,
  MSGCancelled: string,
  MSGConfirmed: string,
  MSGDisputed: string,
  MSGDate: string,
  MSGNoData: string,
  MSGENRG: string,
  transactions: [],
  fetchTransactions: Function,
  fetchTransactionsInProgress: boolean,
  intl: any,
};

const TWENTY_ONE_HOUR = 21 * 60 * 60 * 1000;
const baseClass = `${THEME_PREFIX}-transactions`;

class Transactions extends Component<Props> {
  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  setMomentLang = (locale: string) => {
    switch (locale) {
      case SERBIAN_LANG:
        return SERBIAN_MOMENT_LANG;
      case ENGLISH_LANG:
        return ENGLISH_MOMENT_LANG;
      default:
        return locale;
    }
  };

  renderStatus = (status: string) => {
    const {
      MSGCreated,
      MSGPending,
      MSGCancelled,
      MSGConfirmed,
      MSGDisputed,
    } = this.props;

    switch (status) {
      case TRANSACTION_PENDING:
        return MSGPending;
      case TRANSACTION_CANCELLED:
        return MSGCancelled;
      case TRANSACTION_CONFIRMED:
        return MSGConfirmed;
      case TRANSACTION_DISPUTED:
        return MSGDisputed;
      default:
        return MSGCreated;
    }
  };

  render() {
    const {
      MSGTransactions,
      MSGAllStatuses,
      MSGCreated,
      MSGPending,
      MSGCancelled,
      MSGConfirmed,
      MSGDisputed,
      MSGDate,
      MSGNoData,
      MSGENRG,
      transactions,
      fetchTransactionsInProgress,
      intl: { locale },
    } = this.props;

    const columns = [
      {
        Header: MSGDate,
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
                  +{MSGENRG} {enrgAmount}
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
                {this.renderStatus(transactionStatus)}
              </span>
            </div>
            <div className={`${baseClass}__row--section`}>
              {(new Date() - created < TWENTY_ONE_HOUR && (
                <Moment
                  className={`${baseClass}__column--first`}
                  date={created}
                  fromNow
                  locale={this.setMomentLang(locale)}
                />
              )) || (
                <Moment
                  className={`${baseClass}__column--first`}
                  date={created}
                  format="MM/DD/YYYY"
                  locale={this.setMomentLang(locale)}
                />
              )}
              <span className={`${baseClass}__source`}>{source}</span>
            </div>
          </React.Fragment>
        ),
        filterMethod: (filter, row) => {
          if (filter.value !== '') {
            return row[filter.id].transactionStatus === filter.value;
          }
          return true;
        },
        Filter: ({ filter, onChange }) => (
          <Select
            onChange={onChange}
            width="full"
            selected={filter ? filter.value : ''}
            options={{
              '': MSGAllStatuses,
              [TRANSACTION_CREATED]: MSGCreated,
              [TRANSACTION_PENDING]: MSGPending,
              [TRANSACTION_CANCELLED]: MSGCancelled,
              [TRANSACTION_CONFIRMED]: MSGConfirmed,
              [TRANSACTION_DISPUTED]: MSGDisputed,
            }}
          />
        ),
      },
    ];

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
            noDataText={MSGNoData}
          />
        )}
      </div>
    );
  }
}

export default Transactions;
