export const getTransactionsData = ({ transactions: { transactions } }) =>
  transactions;

export const getChartData = ({ transactions: { chartData } }) => chartData;

export const getDashboardBalance = ({ transactions: { balance } }) => balance;

export const getVirtualBalance = ({ transactions: { totalVirtualCurrency } }) =>
  totalVirtualCurrency;

export const getEnergyEuroRate = ({ transactions: { enrgEurValue } }) =>
  enrgEurValue;

export const isFetchTransactionInProgress = ({
  transactions: { fetchTransactionsInProgress },
}) => fetchTransactionsInProgress;
