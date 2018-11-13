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

        <Chart
          data={mockChartData(6)}
          lineColor="green"
          title={MSGCO2Prevented}
        />

        <Chart data={mockChartData(6)} lineColor="blue" title={MSGkWhSaved} />
      </div>
    );
  }
}

export default Dashboard;
