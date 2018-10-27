// @flow

import React from 'react';

export type Props = {
  MSGDashboard: string,
};

const baseClass = 'gc-dashboard';

const Dashboard = ({ MSGDashboard }: Props) => (
  <div className={baseClass}>{MSGDashboard}</div>
);

export default Dashboard;
