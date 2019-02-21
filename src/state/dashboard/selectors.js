export const getChartData = ({ dashboard: { chartData } }) => chartData;

export const getDashboardBalance = ({ dashboard: { balance } }) => balance;

export const getVirtualBalance = ({ dashboard: { totalVirtualCurrency } }) =>
  totalVirtualCurrency;

export const getEnergyEuroRate = ({ dashboard: { enrgEurValue } }) =>
  enrgEurValue;

export const isDashboardDataInProgress = ({
  dashboard: { fetchDashboardDataInProgress },
}) => fetchDashboardDataInProgress;

export const isSetPasswordInProgress = ({
  dashboard: { setPasswordInProgress },
}) => setPasswordInProgress;

export const isSetPasswordCompleted = ({
  dashboard: { setPasswordCompleted },
}) => setPasswordCompleted;
