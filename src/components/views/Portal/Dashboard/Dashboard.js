// @flow

import React from 'react';

import { LineChart } from '@ui';
import { mockChartData } from 'src/mocks/dashboard';

export type Props = {
  MSGDashboard: string,
};

const baseClass = 'gc-dashboard';

const Dashboard = ({ MSGDashboard }: Props) => (
  <div className={baseClass}>
    {MSGDashboard}

    <LineChart data={mockChartData(6)} colors={['green']} />
    <LineChart data={mockChartData(6)} colors={['blue']} />
  </div>
);

export default Dashboard;
