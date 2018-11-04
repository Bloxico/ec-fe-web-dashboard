// @flow

import React from 'react';

import { LineChart } from '@ui';

export type Props = {
  data: [],
  lineColor: string,
  title: string,
};

const baseClass = 'gc-chart';

const Chart = ({ data, lineColor, title }: Props) => (
  <div className={baseClass}>
    <h2>{title}</h2>
    <LineChart data={data} colors={[lineColor]} />
  </div>
);

export default Chart;
