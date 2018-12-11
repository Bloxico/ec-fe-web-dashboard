import * as faker from 'faker';

export const mockChartData = (length: number) => {
  const data = {};
  const mockArray = Array.from({ length }, () => ({
    [faker.date
      .between(new Date('03/03/2018'), new Date())
      .toLocaleDateString()]: faker.finance.amount(),
  }));
  mockArray
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(item => {
      const key = Object.keys(item)[0];

      data[key] = item[key];
    });
  return data;
};
