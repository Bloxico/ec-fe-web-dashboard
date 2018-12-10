// @flow

import React from 'react';

import {
  Button,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  CustomTooltip,
} from '@ui';
import { THEME_PREFIX } from 'src/constants';

export type Props = {
  data: [],
  title: string,
  action: string,
  timeMSG: string,
  preventedMSG: string,
  ofCO2MSG: string,
};

const baseClass = `${THEME_PREFIX}-chart`;

const Chart = (props: Props) => (
    <div className={baseClass}>
      <header className={`${baseClass}__header`}>
        <h4 className={`${baseClass}__title`}>{props.title}</h4>
        <Button type="link" className={`${baseClass}__action`}>
          {props.action}
        </Button>
      </header>
      <div className={`${baseClass}__graph`}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            margin={{ top: 20, right: 40, left: 0, bottom: 20 }}
            data={props.data}
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: 'rgb(203, 231, 47)', stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: 'rgb(40, 207, 195)', stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dot={false}
              fill="transparent"
              dataKey="CO2 prevented"
              strokeWidth={2}
              stroke="url(#grad1)"
            />
            <CartesianGrid vertical={false} stroke="#ccc" strokeOpacity={0.2} />
            <XAxis angle={350} minTickGap={0} dataKey="date" />
            <YAxis unit="k" tickFormatter={e => e / 1000} angle={330} />
            <Tooltip
              content={
                <CustomTooltip
                  chartClass={baseClass}
                  time={props.timeMSG}
                  prevented={props.preventedMSG}
                  ofCO2={props.ofCO2MSG}
                />
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
);

export default Chart;
