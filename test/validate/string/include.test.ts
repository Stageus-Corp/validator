import { describe, expect, test } from '@jest/globals';
import { message } from '../../../lib';

describe('inlcude method test ( Success )', () => {
  test('1 - success', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = 'abc123';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - success', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = '123abc123';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - success', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = '123abc';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('include method test - not include ( Fail )', () => {
  test('1 - not include', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = '';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - not include', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = 'a';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - not include', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = 'ab';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - not include', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = 'bbb';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});

describe('inlcude method test - invalid value ( Fail )', () => {
  test('1 - null value', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = null;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - undefined value', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = undefined;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - number value', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = 0;

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - object value', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = {};

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - array value', () => {
    const includeString = 'abc';
    const validator = message().isString().include(includeString);
    const inputValue = [];

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});
