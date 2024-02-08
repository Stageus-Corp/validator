import { describe, test, expect, jest } from '@jest/globals';
import { message, object } from '../../../lib';

describe('callback test', () => {
  test('1 - callback test ( Success )', () => {
    const objectSchema = object({
      number: message('invalid number').isNumber(),
    });

    const inputValue = {
      number: 1,
    };

    objectSchema.run(inputValue).callback((valid, reason, value) => {
      expect(valid).toBe(true);
      expect(reason).toBe(null);
      expect(value).toStrictEqual(inputValue);
    });
  });

  test('2 - callback test ( fail )', () => {
    const objectSchema = object({
      number: message('invalid number').isNumber(),
    });

    const inputValue = {
      number: null,
    };

    objectSchema.run(inputValue).callback((valid, reason, value) => {
      expect(valid).toBe(false);
      expect(reason?.length).toBe(1);
    });
  });

  test('3 - callback test ( fail )', () => {
    const falseCb = jest.fn(() => {});
    const objectSchema = object({
      number: message('invalid number').isNumber().false(falseCb),
    });

    const inputValue = {
      number: null,
    };

    objectSchema.run(inputValue).callback((valid, reason, value) => {
      expect(valid).toBe(false);
      expect(reason?.length).toBe(1);
      expect(falseCb).toHaveBeenCalledTimes(1);
    });
  });
});
