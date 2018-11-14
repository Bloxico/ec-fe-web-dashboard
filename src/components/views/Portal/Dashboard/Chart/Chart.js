// @flow

import React from 'react';

import { LineChart } from '@ui';
import { THEME_PREFIX } from 'src/constants';

export type Props = {
  data: [],
  lineColor: string,
  title: string,
};

const baseClass = `${THEME_PREFIX}-chart`;

const Chart = ({ data, lineColor, title }: Props) => (
  <div className={baseClass}>
    <h4>{title}</h4>
    <LineChart
      data={data}
      showLines={false}
      library="Chart.js"
      curves={false}
      colors={[lineColor]}
    />
  </div>
);

export default Chart;
