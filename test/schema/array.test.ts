import { describe, expect, test } from '@jest/globals';
import { array, message } from '../../lib';

describe('validator test', () => {
  test('1 - validator test ( Success )', () => {
    const arraySchema = array(message('invalid value').isNumber());
    const inputValue = ['1', 2];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toStrictEqual([1, 2]);
  });

  test('2 - validator test ( Fail )', () => {
    const arraySchema = array(
      message('invalid value').isNumber({ strict: true })
    );
    const inputValue = ['1', 2];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.value).toStrictEqual(['1', 2]);
  });

  test('3 - validator test ( length Fail )', () => {
    const arraySchema = array(
      message('invalid value').isNumber({ strict: true })
    ).length({ min: 3 });
    const inputValue = ['1', 2];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.value).toStrictEqual(['1', 2]);
  });
});

describe('array non-array test', () => {
  test('1 - non-array value test ( Fail )', () => {
    const testMessage = 'invalid test value message';
    const arraySchema = array(
      message('test message').isNumber({ strict: true }),
      testMessage
    ).length({ min: 3 });
    const inputValue = 1;

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.reason?.[0].field).toBe('Array');
    expect(result.reason?.[0].message).toBe(testMessage);
    expect(result.value).toStrictEqual(1);
  });

  test('2 - null value test ( Fail )', () => {
    const arraySchema = array(message().isNumber({ strict: true }));
    const inputValue = null;

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.value).toStrictEqual(null);
  });

  test('3 - undefined value test ( Fail )', () => {
    const arraySchema = array(message().isNumber({ strict: true }));
    const inputValue = undefined;

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.value).toStrictEqual(undefined);
  });

  test('4 - undefined value test ( Fail )', () => {
    const arraySchema = array(message().isNumber({ strict: true }));
    const inputValue = undefined;

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.value).toStrictEqual(undefined);
  });

  test('5 - 0 value test ( Fail )', () => {
    const arraySchema = array(message().isNumber({ strict: true }));
    const inputValue = 0;

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason).not.toBe(null);
    expect(result.value).toStrictEqual(0);
  });
});

describe('array test ( Dpeth 2 )', () => {
  test('1 - array value ( Success )', () => {
    const arraySchema = array(array(message('should be number').isNumber()));
    const inputValue = [[], [1, 2], [3]];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(true);
  });

  test('2 - invalid array value ( Fail )', () => {
    const arraySchema = array(array(message('should be number').isNumber()));
    const inputValue = [1, 2, 3, [100, 200, null]];

    const result = arraySchema.run(inputValue);

    console.log(result.reason);

    expect(result.valid).toBe(false);
  });

  test('3 - invalid array value ( Success )', () => {
    const arraySchema = array(array(message('should be number').isNumber()));
    const inputValue = [[100, 200, 2], [1], [2, 3], [0], []];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(true);
  });

  test('4 - invalid array value ( Fail )', () => {
    const arraySchema = array(array(message('should be number').isNumber()));
    const inputValue = [[0], [null], null, undefined, []];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(3);
  });

  test('5 - invalid array value ( Fail )', () => {
    const arraySchema = array(array(message('should be number').isNumber()));
    const inputValue = [[0], [null], null, undefined, [[[[]]]]];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(4);
  });
});

describe('array test ( Depth 3 )', () => {
  test('1 - array value ( Success )', () => {
    const arraySchema = array(array(array(message().isNumber())));
    const inputValue = [[[1], []], [[1, 2, 3]], []];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(true);
  });

  test('2 - array invalid value ( Fail )', () => {
    const arraySchema = array(array(array(message().isNumber())));
    const inputValue = [[[1], []], [[1, 2, 3]], [null]];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(1);
  });

  test('3 - array invalid value ( Fail )', () => {
    const arraySchema = array(array(array(message().isNumber())));
    const inputValue = [[[null]], [1, 2], [[['null']]]];

    const result = arraySchema.run(inputValue);
    console.log(result.reason);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(4);
  });
});
