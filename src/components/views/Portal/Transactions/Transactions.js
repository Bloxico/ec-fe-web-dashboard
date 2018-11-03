// @flow

import React from 'react';

export type Props = {
  MSGDTransactions: string,
};

const baseClass = 'gc-transactions';

const Dashboard = ({ MSGDTransactions }: Props) => (
  <div className={baseClass}>{MSGDTransactions}</div>
);

export default Dashboard;
