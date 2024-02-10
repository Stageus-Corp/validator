import { describe, expect, test } from '@jest/globals';
import { message } from '../../../lib';

describe('isEmail method test', () => {
  test('1 - valid email test', () => {
    const validator = message('').isString().isEmail();
    const inputValue = 'abc123@xx.xx';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - valid email test', () => {
    const validator = message('').isString().isEmail();
    const inputValue = '@xx.xx';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - valid email test', () => {
    const validator = message('').isString().isEmail();
    const inputValue = 'abc123@';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});
