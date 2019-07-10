import React from 'react';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

export type Props = {
  payload: any,
  time: string,
  prevented: string,
  ofCO2: string,
  chartClass: string,
};

const CustomTooltip = (props: Props) => {
  if (props.payload[0] != null) {
    return (
      <div className={`${props.chartClass}__tooltip`}>
        <div>
          {props.time} {props.payload[0].payload.date}
        </div>
        <div>
          {props.prevented}{' '}
          {props.payload[0].payload['CO2 prevented'].toFixed(2)}g {props.ofCO2}
        </div>
      </div>
    );
  }
  return <DefaultTooltipContent {...props} />;
};
export default CustomTooltip;
