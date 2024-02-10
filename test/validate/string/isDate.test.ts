import { describe, expect, test } from '@jest/globals';
import { message } from '../../../lib';

describe('isDate method test ( Success )', () => {
  test('1 - isDate test ( YYYY-MM-DD )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2022-02-23';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDate test ( YYYY-MM-DD )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2022-03-23';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDate leap year test ( YYYY-MM-DD )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2024-02-29';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDate leap year test ( YYYY-MM-DD )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2020-02-29'; // lead year

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('isDate method test - year test', () => {
  test('1 - isDate test ( Success )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '1234-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDate test ( Success )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '0234-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDate test ( Success )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '0000-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDate test ( length of year 6 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '123433-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isDate test ( length of year 5 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '20222-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('6 - isDate test ( length of year 3 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '100-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('7 - isDate test ( length of year 2 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '12-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('8 - isDate test ( length of year 1 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '1-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('isDate method test - month test', () => {
  test('1 - isDate test ( Success ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDate test ( Success )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-10-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDate test ( 0 month )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-00-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDate test ( length of month 1 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-1-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isDate test ( length of month 3 )', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-010-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('isDate method test - date test', () => {
  test('1 - isDate test ( Success ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-01-01';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDate test ( Success ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-01-30';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDate test ( Success ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-01-31';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDate test ( date out of range ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-01-32';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isDate test ( non-leap-year 02-29 ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2023-02-29';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('6 - isDate test ( leap-year 02-29 ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2024-02-29';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('7 - isDate test ( leap-year 02-29 ) ', () => {
    const validator = message('').isString().isDate();
    const inputValue = '2020-02-29';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });
});
