import { describe, expect, test } from '@jest/globals';
import { array, message, object } from '../../../lib';

describe('object schema test', () => {
  test('1 - object value ( Success )', () => {
    const arraySchema = array({
      number: message().isNumber(),
    });
    const inputValue = [
      {
        number: 2,
      },
      {
        number: 100,
      },
    ];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toStrictEqual(inputValue);
  });

  test('2 - deep copy value ( Success )', () => {
    const numberSchema = object({
      number: message().isNumber().toString(),
    });

    const inputValue = {
      number: 1,
    };

    const result = numberSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(typeof result.value.number).toBe('string');
  });

  test('2 - object value ( Fail )', () => {
    const arraySchema = array({
      number: message().isNumber(),
    });
    const inputValue = [1, 2, 3];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.[0].field).toBe('Array[0].number');
  });

  test('3 - depth2 object value ( Success )', () => {
    const arraySchema = array({
      test: {
        numberList: array({
          number: 1,
          testList: array({
            test: message().isString(),
          }),
        }),
      },
    });
    const inputValue = [
      {
        test: {
          numberList: [
            {
              testList: [
                {
                  test: 'hi',
                },
              ],
            },
          ],
        },
      },
    ];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
  });

  test('4 - depth2 object value ( Fail )', () => {
    const arraySchema = array({
      test: {
        numberList: array({
          number: 1,
          testList: array({
            test: message().isString(),
          }),
        }),
      },
    });
    const inputValue = [1, 2, 3];

    const result = arraySchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.[0].field).toBe('Array[0].test.numberList');
  });
});
