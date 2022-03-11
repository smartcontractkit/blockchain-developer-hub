import { getRandomItemsFromArray } from '../getRandomItemsFromArray';

describe('getRandomItemsFromArray function', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = getRandomItemsFromArray(array, 4);
  test('The output number is correct', () => {
    expect(result.length).toBe(4);
  });

  test('The outputs are from the array', () => {
    for (let i = 0; i < result.length; i++) {
      expect(array.includes(result[i])).toBeTruthy();
    }
  });

  test('The outputs are unique', () => {
    for (let i = 0; i < result.length; i++) {
      expect(array.filter((r) => r === result[i]).length).toBe(1);
    }
  });
});
