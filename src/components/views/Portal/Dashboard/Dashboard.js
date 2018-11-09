// @flow

import React from 'react';

import { mockChartData } from 'src/mocks/dashboard';
import { THEME_PREFIX } from 'src/constants';
import Sidebar from '@ui/Sidebar';
import { Col, Row } from '@ui';

import Chart from './Chart';

export type Props = {
  MSGDashboard: string,
  MSGCO2Prevented: string,
  MSGkWhSaved: string,
};

// TODO:
// - add headers
// - improve styles and markup
// - integrate BE

const baseClass = `${THEME_PREFIX}-dashboard`;

// TODO@martins get actual colors from designers
const Dashboard = ({ MSGDashboard, MSGCO2Prevented, MSGkWhSaved }: Props) => (
  <div className={baseClass}>
    <Sidebar position="left" show>
      <Sidebar.Header>Header</Sidebar.Header>
      <Sidebar.Body>Body</Sidebar.Body>
      <Sidebar.Footer>Footer</Sidebar.Footer>
    </Sidebar>
    <Row>
      <Col>
        <h3>{MSGDashboard}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Chart
          data={mockChartData(6)}
          lineColor="green"
          title={MSGCO2Prevented}
        />
      </Col>
      <Col>
        <Chart data={mockChartData(6)} lineColor="blue" title={MSGkWhSaved} />
      </Col>
    </Row>
  </div>
);

export default Dashboard;
