import reverseString from './reverseString';

test('reverses a single word', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverses multiple words', () => {
  expect(reverseString('hello there')).toBe('ereht olleh');
});

test('reverse multiple words with punctuation', () => {
  expect(reverseString('general kenobi!')).toBe('!ibonek lareneg');
});

test('reverses numbers', () => {
  expect(reverseString('123')).toBe('321');
});

test('reverses an empty string', () => {
  expect(reverseString('')).toBe('');
});
