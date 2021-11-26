import analyzeArray from './analyzeArray';

test('checks for object to contain average, min, max, length properties with any number', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: expect.any(Number),
    min: expect.any(Number),
    max: expect.any(Number),
    length: expect.any(Number),
  });
});

test('analyze array with [1, 8, 3, 4, 2, 6]', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyze array with [0]', () => {
  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test('analyze array with []', () => {
  expect(analyzeArray([])).toBeUndefined();
});
