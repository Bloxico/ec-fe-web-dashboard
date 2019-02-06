// @flow

import React, { Component } from 'react';

import { THEME_PREFIX } from 'src/constants';

import Header from '@partials/Header';
import { Loader } from '@ui';

import Chart from './Chart';

export interface Props {
  MSGDashboard: string;
  MSGCO2Prevented: string;
  fetchTransactions: Function;
  fetchExchangeRate: Function;
  chartData: [];
  virtualBalance: number;
  dashboardBalance: number;
  fetchTransactionsInProgress: boolean;
  MSGTotalAccumulated: string;
  MSGEnergyShort: string;
  MSGBicycleBits: string;
  MSGExchangeRateFailed: string;
  enrgEurValue: number;
  MSGPrevented: string;
  MSGTime: string;
  MSGOfCO2: string;
}

const baseClass = `${THEME_PREFIX}-dashboard`;

class Dashboard extends Component<Props> {
  componentDidMount() {
    const { fetchTransactions, fetchExchangeRate } = this.props;
    fetchTransactions(3);
    fetchExchangeRate();
  }

  render() {
    const {
      MSGDashboard,
      MSGCO2Prevented,
      MSGTotalAccumulated,
      MSGEnergyShort,
      MSGBicycleBits,
      MSGExchangeRateFailed,
      MSGTime,
      MSGPrevented,
      MSGOfCO2,
      chartData,
      virtualBalance,
      dashboardBalance,
      fetchTransactionsInProgress,
      enrgEurValue,
    } = this.props;

    return (
      <div className={baseClass}>
        {fetchTransactionsInProgress && <Loader />}
        {!fetchTransactionsInProgress && (
          <React.Fragment>
            <Header action="menu" title={MSGDashboard} />

            <section className={`${baseClass}__content`}>
              <dl className={`${baseClass}__info`}>
                <dt className={`${baseClass}__title`}>{MSGTotalAccumulated}</dt>
                <dd className={`${baseClass}__total`}>
                  {MSGEnergyShort}{' '}
                  {dashboardBalance && dashboardBalance.toFixed(2)}
                </dd>

                <dd className={`${baseClass}__note`}>
                  {(enrgEurValue &&
                    `1 ENRG = ${enrgEurValue.toFixed(4)} EUR`) ||
                    MSGExchangeRateFailed}
                </dd>
              </dl>

              <div className={`${baseClass}__group`}>
                <dl className={`${baseClass}__info`}>
                  <dt className={`${baseClass}__title`}>{MSGBicycleBits}</dt>
                  <dd className={`${baseClass}__amount`}>
                    {virtualBalance && virtualBalance.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </section>
            {chartData && chartData.length > 0 && (
              <section className={`${baseClass}__chart`}>
                <Chart
                  data={chartData}
                  timeMSG={MSGTime}
                  preventedMSG={MSGPrevented}
                  ofCO2MSG={MSGOfCO2}
                  title={MSGCO2Prevented}
                />
              </section>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Dashboard;
