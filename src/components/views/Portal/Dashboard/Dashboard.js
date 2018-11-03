// @flow

import React from 'react';

import Sidebar from '@ui/Sidebar';
import { THEME_PREFIX } from 'src/constants';

export type Props = {
  MSGDashboard: string,
};

const baseClass = `${THEME_PREFIX}-dashboard`;

const Dashboard = ({ MSGDashboard }: Props) => (
  <div className={baseClass}>
    {MSGDashboard}
    <Sidebar show>
      <Sidebar.Header>
        <hr />
      </Sidebar.Header>
      <Sidebar.Body align="center">
        <h3 className="gc-heading">GPU earns more</h3>
        <p>
          Graphics card which has a GPU works much faster than CPU.
          Consider getting one.
        </p>
      </Sidebar.Body>
      <Sidebar.Footer align="right">
        footer
      </Sidebar.Footer>
    </Sidebar>
  </div>
);

export default Dashboard;
