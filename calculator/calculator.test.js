import calculator from './calculator';

test('checks for add, subtract, divide, multiply operations are defined in the calculator object', () => {
  expect(calculator).toMatchObject({
    add: expect.any(Function),
    subtract: expect.any(Function),
    divide: expect.any(Function),
    multiply: expect.any(Function),
  });
});

test('calculator add operation with ints: 1 + 2 = 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.add(1, 2)).toBeGreaterThan(2);
  expect(calculator.add(1, 2)).toBeGreaterThanOrEqual(3);
});

test('calculator add operation with floats: 0.1 + 0.2 = 0.3', () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('calculator subtract operation with ints: 1 - 2 = -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(1, 2)).toBeLessThan(0);
  expect(calculator.subtract(1, 2)).toBeLessThanOrEqual(-1);
});

test('calculator subtract operation with floats: 0.1 + 0.2 = 0.3', () => {
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

test('calculator divide operation with ints: 4 / 2 = 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('calculator divide operation with floats: 2 / 4 = 0.5', () => {
  expect(calculator.divide(2, 4)).toBeCloseTo(0.5);
});

test('calculator divide operation with dividing by 0: 1 / 0 = undefined', () => {
  expect(calculator.divide(1, 0)).toBeFalsy();
  expect(calculator.divide(1, 0)).toBeUndefined();
});

test('calculator multiply operation with ints: 5 * 5 = 25', () => {
  expect(calculator.multiply(5, 5)).toBe(25)
})

test('calculator multiply operation with floats: 0.5 * 0.5 = 0.25', () => {
  expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25)
})