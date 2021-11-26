// tests for taking a string and returning it with the first character capitalized
import capitalize from './capitalize';

test('capitalizes the first character of a single word', () => {
  expect(capitalize('blonde')).toBe('Blonde');
});

test('capitalizes the first character of multiple words', () => {
  expect(capitalize('channel orange')).toBe('Channel orange');
});

test('capitalizes the first character of an already capitalized word', () => {
  expect(capitalize('Endless')).toBe('Endless');
});

test('capitalizes the first character of an all caps word', () => {
  expect(capitalize('NOSTALGIA')).toBe('NOSTALGIA');
});

test('capitalizes the first character of a sentence', () => {
  expect(capitalize('hello, please give me a job.')).toBe(
    'Hello, please give me a job.'
  );
});

test('capitalize with an empty string', () => {
  expect(capitalize('')).toBe('');
});
