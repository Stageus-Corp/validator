import { describe, expect, test } from '@jest/globals';
import { array, message, object } from '../../../lib';

describe('object test', () => {
  test('1 - object test ( Success )', () => {
    const objectSchema = object({
      name: message('invalid name').isString(),
      pw: message('invalid pw').isString(),
    });
    const inputValue = {
      name: 'Hi',
      pw: 'asdf1234',
    };

    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
  });

  test('2 - object test ( Fail )', () => {
    const objectSchema = object({
      name: message('invalid name').isString(),
      pw: message('invalid pw').isString(),
    });
    const inputValue = {
      name: null,
      pw: 'asdf1234',
    };

    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(1);
  });

  test('3 - object test ( Fail )', () => {
    const errorMessage = 'invalid name test message';
    const objectSchema = object({
      name: message(errorMessage).isString(),
      pw: message('invalid pw').isString(),
    });
    const inputValue = {
      name: null,
      pw: 'asdf1234',
    };

    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(1);
    expect(result.reason?.[0].message).toBe(errorMessage);
  });

  test('4 - object test ( Fail )', () => {
    const objectSchema = object({
      name: message('invalid name').isString(),
      pw: message('invalid pw').isString(),
    });
    const inputValue = {
      name: null,
      pw: null,
    };

    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(2);
  });
});

describe('nested object function', () => {
  test('1 - depth 2 test ( Success )', () => {
    const objectSchema = object(
      object({
        number: message().isNumber(),
      })
    );

    const inputValue = { number: 1 };
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
  });

  test('2 - dpeth 2 test ( Success )', () => {
    const objectSchema = object({
      email: message('invalid email').isString().isEmail(),
      additionalInfo: object({
        number: message('invalid number').isNumber(),
      }),
    });

    const inputValue = {
      email: 'abc123@xx.xx',
      additionalInfo: {
        number: 1,
      },
    };
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
  });

  test('3 - dpeth 2 test ( Fail )', () => {
    const objectSchema = object({
      email: message('invalid email').isString().isEmail(),
      additionalInfo: object({
        number: message('invalid number').isNumber(),
      }),
    });

    const inputValue = {
      email: 'abc123@xx.xx',
      additionalInfo: {
        number: null,
      },
    };
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.[0].field).toBe('Object.additionalInfo.number');
  });
});

describe('null schema test', () => {
  test('1 - null test', () => {
    const schemaObject = null;
    const objectSchema = object(schemaObject);

    const inputValue = null;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('2 - null test', () => {
    const schemaObject = null;
    const objectSchema = object(schemaObject);

    const inputValue = {};
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('3 - null test', () => {
    const schemaObject = null;
    const objectSchema = object(schemaObject);

    const inputValue = 0;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('4 - null test', () => {
    const schemaObject = null;
    const objectSchema = object(schemaObject);

    const inputValue = 'null';
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });
});

describe('undefeind schema test', () => {
  test('1 - undefined test', () => {
    const schemaObject = undefined;
    const objectSchema = object(schemaObject);

    const inputValue = undefined;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('2 - undefined test', () => {
    const schemaObject = undefined;
    const objectSchema = object(schemaObject);

    const inputValue = 0;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('3 - undefined test', () => {
    const schemaObject = undefined;
    const objectSchema = object(schemaObject);

    const inputValue = null;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('4 - undefined test', () => {
    const schemaObject = undefined;
    const objectSchema = object(schemaObject);

    const inputValue = {};
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('5 - undefined test', () => {
    const schemaObject = undefined;
    const objectSchema = object(schemaObject);

    const inputValue = [1, 2, 3];
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });

  test('6 - undefined test', () => {
    const schemaObject = undefined;
    const objectSchema = object(schemaObject);

    const inputValue = 0;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe(schemaObject);
  });
});

describe('validator test', () => {
  test('1 - validator test ( Success )', () => {
    const objectSchema = object(message('invalid name').isString());

    const inputValue = 'myName';
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.reason).toBe(null);
    expect(result.value).toBe('myName');
  });

  test('2 - validator test ( Fail )', () => {
    const objectSchema = object(message('invalid name').isString());

    const inputValue = null;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(1);
  });

  test('3 - validator test ( Fail )', () => {
    const objectSchema = object(message('invalid name').isString());

    const inputValue = 0;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(1);
  });

  test('4 - validator test ( Fail )', () => {
    const objectSchema = object(message('invalid name').isString());

    const inputValue = undefined;
    const result = objectSchema.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.reason?.length).toBe(1);
  });
});
