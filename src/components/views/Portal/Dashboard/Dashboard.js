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
        <h5 className={`${baseClass}-h5`}>Total accumulated</h5>
        <h2 className={`${baseClass}-h2`}>ENRG {balance.toFixed(2)}</h2>
        <div className={`${baseClass}-separator`} />
        <h5 className={`${baseClass}-h5`}>Bicycle Bits</h5>
        <h4 className={`${baseClass}-h4`}>{totalVirtualCurrency.toFixed(2)}</h4>
        <div className={`${baseClass}-separator`} />
        <Chart data={data} lineColor="#8bdd68" title={MSGCO2Prevented} />
      </div>
    );
  }
}

export default Dashboard;
