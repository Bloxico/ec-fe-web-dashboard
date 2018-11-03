// @flow

import React from 'react';
import { FormattedDate } from 'react-intl';

import { THEME_PREFIX } from "src/constants";

import { Table } from '@ui';

import { mockTransactions } from 'src/mocks/transactions';

export type Props = {
  MSGTransactions: string,
};

const baseClass = `${THEME_PREFIX}-transactions`;

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
    Cell: ({ value }: any) => <FormattedDate v value={value} />,
  },
  {
    Header: 'Source',
    accessor: 'source',
    Cell: ({ value }: any) => <span>{value}</span>,
  },
];

const Transactions = ({ MSGTransactions }: Props) => console.log(MSGTransactions) || (
    <div className={baseClass}>
      <h3>{MSGTransactions}</h3>
      <Table
        showPagination={false}
        data={mockTransactions(10)}
        columns={columns}
      />
    </div>
  );

export default Transactions;
