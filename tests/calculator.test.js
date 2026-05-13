const { add, subtract, multiply, divide } = require('../src/calculator');

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divide two numbers', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divide by zero', () => {
  e
  xpect(() => divide(6, 0)).toThrow('Cannot divide by zero');
});