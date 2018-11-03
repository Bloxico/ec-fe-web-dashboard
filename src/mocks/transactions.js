import * as faker from 'faker';

export const mockTransactions = (length: number) =>
  Array.from({ length }, () => ({
    amount: `ENRG ${faker.random.number({ min: 0, max: 50000 })}`,
    date: faker.date.past(),
    source: 'Ring-ring',
  }));
