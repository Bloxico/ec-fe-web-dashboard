// @flow

import React, { PureComponent } from 'react';

import { mockChartData } from 'src/mocks/dashboard';
import { THEME_PREFIX } from 'src/constants';

import Header from '@partials/Header';

import Chart from './Chart';

export interface Props {
  isSidebarOpen: boolean;
  showSidebar: Function;
  hideSidebar: Function;
  MSGDashboard: string;
  MSGCO2Prevented: string;
  MSGkWhSaved: string;
}

// TODO:
// - add headers
// - improve styles and markup
// - integrate BE

const baseClass = `${THEME_PREFIX}-dashboard`;

// TODO@martins get actual colors from designers
class Dashboard extends PureComponent<Props> {
  render() {
    const { MSGDashboard, MSGCO2Prevented, MSGkWhSaved } = this.props;

    return (
      <div className={baseClass}>
        <Header action="menu" title={MSGDashboard} />

          <dl className={`${baseClass}__info`}>
            <dt className={`${baseClass}__title`}>Total accumulated</dt>
            <dd className={`${baseClass}__total`}>ENRG 25,400</dd>
            <dd className={`${baseClass}__note`}>1 ENRG = 1 EUR</dd>
          </dl>

        <section className={`${baseClass}__group`}>
          <dl className={`${baseClass}__info`}>
            <dt className={`${baseClass}__title`}>Bicycle Bits</dt>
            <dd className={`${baseClass}__amount`}>15,320</dd>
            <dd className={`${baseClass}__note`}>1 BB = 0.x ENRG</dd>
          </dl>

          <dl className={`${baseClass}__info`}>
            <dt className={`${baseClass}__title`}>M3 Euro Gas</dt>
            <dd className={`${baseClass}__amount`}>4,800</dd>
            <dd className={`${baseClass}__note`}>1 M3 = 0.x ENRG</dd>
          </dl>
        </section>

        <section className={`${baseClass}__chart`}>
          <Chart
            data={mockChartData(6)}
            lineColor="#1be088"
            title={MSGCO2Prevented}
            action="Show BB"
          />
        </section>

        <section className={`${baseClass}__chart`}>
          <Chart
            data={mockChartData(6)}
            lineColor="#005bea"
            title={MSGkWhSaved}
            action="Show M3EG"
          />
        </section>
      </div>
    );
  }
}

export default Dashboard;
