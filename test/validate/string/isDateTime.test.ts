import { describe, expect, test } from '@jest/globals';
import { message } from '../../../lib';

describe('isDateTime method test ( Success )', () => {
  test('1 - isDateTime test ( YYYY-MM-DDTHH:MM:SS.sss )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDateTime test ( YYYY-MM-DDTHH:MM:SS.sssZ )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00.000Z';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDateTime test ( YYYY-MM-DDTHH:MM:SS )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('isDateTime method test - hour test', () => {
  test('1 - isDateTime test ( Success )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T12:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDateTime test ( Success )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T01:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDateTime test ( length of hour 1 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T0:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDateTime test ( length of hour 3 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T011:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isDateTime test ( hour out of range )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T25:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('isDateTime method test - minute test', () => {
  test('1 - isDateTime test ( Success )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:01:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDateTime test ( Success )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:10:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDateTime test ( length of minute 1 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:1:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDateTime test ( length of minute 3 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:020:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isDateTime test ( minute out of range )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:61:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('isDateTime method test - second test', () => {
  test('1 - isDateTime test ( Success )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isDateTime test ( Success )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:10.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isDateTime test ( length of second 1 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:0.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isDateTime test ( length of second 3 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:000.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isDateTime test ( second out of range )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:61.000';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('6 - isDateTime test ( length of decimal second 2 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00.00';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('7 - isDateTime test ( length of decimal second 1 )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00.0';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('8 - isDateTime test ( non-decimal second )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('9 - isDateTime test ( non-decimal second but point )', () => {
    const validator = message('').isString().isDateTime();
    const inputValue = '2022-02-23T00:00:00.';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});
