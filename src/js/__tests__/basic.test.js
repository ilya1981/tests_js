/* eslint-disable sort-keys */
/*global test*/
/*global expect*/
import showHealth from '../basic';

test('should healthy', () => {
  const received = showHealth({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('should wounded', () => {
  const received = showHealth({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('should critical', () => {
  const received = showHealth({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});

test('Parameter is not a number!', () => {
  expect(() => {
    showHealth({});
  }).toThrow();
});

// eslint-disable-next-line jest/no-identical-title
test('Parameter is not a number!', () => {
  expect(() => {
    showHealth({ name: 'Маг', health: 'mistake' });
  }).toThrow();
});

// eslint-disable-next-line jest/no-identical-title
test('Parameter is not a number!', () => {
  expect(() => {
    showHealth({ name: 'Маг', health: -10 });
  }).toThrow();
});

/* Test('should killed', () => {
  const received = showHealth({ name: 'Маг', health: 'mistake' });
  expect(received).toBe('killed');
});

test('should killed', () => {
  const received = showHealth({});
  expect(received).toBe('killed');
});

test('should killed', () => {
  const received = showHealth({ name: 'Маг', health: -10 });
  expect(received).toBe('killed');
}); */