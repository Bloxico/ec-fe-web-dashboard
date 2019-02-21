export const getTransactionsData = ({ transactions: { transactions } }) =>
  transactions;

export const isFetchTransactionInProgress = ({
  transactions: { fetchTransactionsInProgress },
}) => fetchTransactionsInProgress;
