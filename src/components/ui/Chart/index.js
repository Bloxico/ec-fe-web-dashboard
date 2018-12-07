import ReactChartkick from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

// eslint-disable-next-line
import LineChart from './LineChart/LineChart';

export { LineChart };
