// @flow

import React, { Component } from 'react';

import { THEME_PREFIX } from 'src/constants';

import Header from '@partials/Header';
import { Loader } from '@ui';

import Chart from './Chart';

export interface Props {
  isSidebarOpen: boolean;
  showSidebar: Function;
  hideSidebar: Function;
  MSGDashboard: string;
  MSGCO2Prevented: string;
  fetchTransactions: Function;
  transactions: [];
  chartData: any;
  virtualBalance: number;
  dashboardBalance: number;
  fetchTransactionsInProgress: boolean;
  MSGTotalAccumulated: string;
  MSGEnergyShort: string;
  MSGBicycleBits: string;
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
    fetchTransactions(3);
  }

  render() {
    const {
      MSGDashboard,
      MSGCO2Prevented,
      MSGTotalAccumulated,
      MSGEnergyShort,
      MSGBicycleBits,
      chartData,
      virtualBalance,
      dashboardBalance,
      fetchTransactionsInProgress,
    } = this.props;

    return (
      <div className={baseClass}>
        {fetchTransactionsInProgress && <Loader />}
        {!fetchTransactionsInProgress && (
          <div>
            <Header action="menu" title={MSGDashboard} />
            <div className={`${baseClass}__wrapper`}>
              <dl className={`${baseClass}__info`}>
                <dt className={`${baseClass}__title`}>{MSGTotalAccumulated}</dt>
                <dd className={`${baseClass}__total`}>
                  {MSGEnergyShort}{' '}
                  {dashboardBalance && dashboardBalance.toFixed(2)}
                </dd>
                {/* /!*<dd className={`${baseClass}__note`}>1 ENRG = x EUR</dd>*!/ TODO@all get the value of ENRG */}
              </dl>

              <section className={`${baseClass}__group`}>
                <dl className={`${baseClass}__info`}>
                  <dt className={`${baseClass}__title`}>{MSGBicycleBits}</dt>
                  <dd className={`${baseClass}__amount`}>
                    {virtualBalance && virtualBalance.toFixed(2)}
                  </dd>
                </dl>
              </section>
            </div>
            <section className={`${baseClass}__chart`}>
              <Chart
                data={chartData}
                lineColor="#1be088"
                title={MSGCO2Prevented}
              />
            </section>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
