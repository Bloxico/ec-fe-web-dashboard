// @flow

import React from 'react';

import { mockChartData } from 'src/mocks/dashboard';

import Chart from './Chart';

export type Props = {
  MSGDashboard: string,
  MSGCO2Prevented: string,
  MSGkWhSaved: string,
};

const baseClass = 'gc-dashboard';
// TODO@martins get actual colors from designers
const Dashboard = ({ MSGDashboard, MSGCO2Prevented, MSGkWhSaved }: Props) => (
  <div className={baseClass}>
    {MSGDashboard}

    <Chart data={mockChartData(6)} lineColor="green" title={MSGCO2Prevented} />
    <Chart data={mockChartData(6)} lineColor="blue" title={MSGkWhSaved} />
  </div>
);

export default Dashboard;
