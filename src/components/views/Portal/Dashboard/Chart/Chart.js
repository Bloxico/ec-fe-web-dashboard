// @flow

import React from 'react';

import { Button, LineChart } from '@ui';
import { THEME_PREFIX } from 'src/constants';

export type Props = {
  data: [],
  lineColor: string,
  title: string,
  action: string,
};

const baseClass = `${THEME_PREFIX}-chart`;

const Chart = ({ data, lineColor, title, action }: Props) => (
  <div className={baseClass}>
    <header className={`${baseClass}__header`}>
      <h4 className={`${baseClass}__title`}>{title}</h4>
      <Button type="link" className={`${baseClass}__action`}>
        {action}
      </Button>
    </header>
    <div className={`${baseClass}__graph`}>
      <LineChart data={data} colors={[lineColor]} />
    </div>
  </div>
);

export default Chart;
