// @flow

import React, { Component } from 'react';

import { THEME_PREFIX } from 'src/constants';

import Header from '@partials/Header';

import Chart from './Chart';

export interface Props {
  isSidebarOpen: boolean;
  showSidebar: Function;
  hideSidebar: Function;
  MSGDashboard: string;
  MSGCO2Prevented: string;
  fetchTransactions: Function;
  transactions: [];
  data: Object;
}

// TODO:
// - add headers
// - improve styles and markup
// - integrate BE

const baseClass = `${THEME_PREFIX}-dashboard`;

// TODO@martins get actual colors from designers
class Dashboard extends Component<Props> {
  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  render() {
    const { MSGDashboard, MSGCO2Prevented, transactions } = this.props;
    const data = {};
    let balance = 0;
    let totalVirtualCurrency = 0;
    const date = new Date();
    date.setMonth(date.getMonth() - 3);
    if (transactions) {
      transactions
        .filter(o => new Date(o.created) >= date)
        .forEach(item => {
          data[new Date(item.created).toLocaleDateString()] = item.enrgAmount;
        }, {});
      transactions.forEach(e => {
        balance += e.enrgAmount;
        totalVirtualCurrency += e.virtualCurrencyAmmount;
      });
    }

    return (
      <div className={baseClass}>
        <Header action="menu" title={MSGDashboard} />

        <dl className={`${baseClass}__info`}>
          <dt className={`${baseClass}__title`}>Total accumulated</dt>
          <dd className={`${baseClass}__total`}>ENRG {balance.toFixed(2)}</dd>
          <dd className={`${baseClass}__note`}>1 ENRG = x EUR</dd>
        </dl>

        <section className={`${baseClass}__group`}>
          <dl className={`${baseClass}__info`}>
            <dt className={`${baseClass}__title`}>Bicycle Bits</dt>
            <dd className={`${baseClass}__amount`}>
              {totalVirtualCurrency.toFixed(2)}
            </dd>
          </dl>
        </section>

        <section className={`${baseClass}__chart`}>
          <Chart data={data} lineColor="#1be088" title={MSGCO2Prevented} />
        </section>
      </div>
    );
  }
}

export default Dashboard;
