// @flow

import React from 'react';
import * as faker from 'faker';

import { Table } from '@ui';

export type Props = {
  MSGDTransactions: string,
};

const baseClass = 'gc-transactions';

export const mockTransactions = (length: number) =>
  Array.from({ length }, () => ({
    amount: `ENRG ${faker.random.number({ min: 0, max: 50000 })}`,
    date: faker.date.past(),
    source: 'Ring-ring',
  }));

const Transactions = ({ MSGDTransactions }: Props) => {
  const columns = [
    {
      Header: 'Amount',
      accessor: 'amount',
      id: 'amount',
      Cell: ({ value }: any) => <span>{value}</span>,
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: ({ value }: any) => <span>{value.toString()}</span>,
    },
    {
      Header: 'Source',
      accessor: 'source',
      Cell: ({ value }: any) => <span>{value}</span>,
    },
  ];

  return (
    <div className={baseClass}>
      {MSGDTransactions}
      <Table
        showPagination={false}
        data={mockTransactions(10)}
        columns={columns}
      />
    </div>
  );
};

export default Transactions;
