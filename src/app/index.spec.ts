import { sum } from './helpers';

describe('sum', () => {
  test('sum 1 + 1 to equal 2', () => {
    expect(sum(1)).toBe(2);
  });
});
