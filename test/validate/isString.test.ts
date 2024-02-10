import { describe, expect, test } from '@jest/globals';
import { message } from '../../lib';

describe('isString method test', () => {
  test('1 - empty value', () => {
    const validator = message().isString();
    const inputValue = '';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
  });

  test('2 - null value', () => {
    const validator = message().isString();
    const inputValue = null;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
  });

  test('3 - undefined value', () => {
    const validator = message().isString();
    const inputValue = undefined;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
  });

  test('4 - number value', () => {
    const validator = message().isString();
    const inputValue = 123;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(123);
  });

  test('5 - number value', () => {
    const validator = message().isString();
    const inputValue = 0;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(0);
  });

  test('6 - number array value', () => {
    const validator = message().isString();
    const inputValue = [123];

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toStrictEqual([123]);
  });

  test('7 - null array value', () => {
    const validator = message().isString();
    const inputValue = [null, null, null];

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toStrictEqual([null, null, null]);
  });

  test('8 - undefined array value', () => {
    const validator = message().isString();
    const inputValue = [undefined, undefined];

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toStrictEqual([undefined, undefined]);
  });
});
