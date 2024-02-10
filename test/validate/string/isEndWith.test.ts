import { describe, expect, test } from '@jest/globals';
import { message } from '../../../lib';

describe('isEndWith method test', () => {
  test('1 - isEndWithTest ( Success )', () => {
    const validator = message().isString().isEndWith('abc');
    const inputValue = '123abc';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isEndWithTest ( Fail )', () => {
    const validator = message().isString().isEndWith('abc');
    const inputValue = '123abc1';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isEndWithTest ( Fail )', () => {
    const validator = message().isString().isEndWith('abc');
    const inputValue = 'abc123';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});
