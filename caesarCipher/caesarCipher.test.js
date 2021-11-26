import caesarCipher from './caesarCipher';

test('caesar cipher with single letter', () => {
  expect(caesarCipher('A', 1)).toBe('B')
})

test('caesar cipher with words', () => {
  expect(caesarCipher('Aaa', 1)).toBe('Bbb')
})

test('caesar cipher with phrases', () => {
  expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
})

test('caesar cipher with negative shift', () => {
  expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!')
})

test('caesar cipher with wraps', () => {
  expect(caesarCipher('Z', 1)).toBe('A')
})

test('caesar cipher with large shift factors', () => {
  expect(caesarCipher('Hello, World!', 75)).toBe('Ebiil, Tloia!')
})

test('caesar cipher with large negative shift factors', () => {
  expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!')
})