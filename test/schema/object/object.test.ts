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

describe('validator transform test', () => {
  test('1 - trasnform test', () => {
    const objectSchema = object(
      message('invalid number').isNumber().toString()
    );

    const inputNumber = 2;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toBe(inputNumber.toString());
  });

  test('2 - transform test', () => {
    const objectSchema = object(
      message('invalid number').isString().split(' ')
    );

    const inputNumber = '123 123';
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value.length).toBe(2);
  });

  test('3 - trasnform test', () => {
    const objectSchema = object({
      name: message('invalid name').isString(),
      idx: message('invalid idx').isString().toInt(),
    });

    const inputNumber = {
      name: 'name',
      idx: '3',
    };
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value.idx).toBe(3);
  });

  test('4 - trasnform test', () => {
    const objectSchema = object({
      name: message('invalid name').isString(),
      test: {
        idx: message('invalid idx').isString().toInt(),
        etc: 0,
      },
    });

    const inputNumber = {
      name: 'name',
      test: {
        idx: '5',
      },
    };
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value.test.idx).toBe(5);
    expect(result.value.test.etc).toBe(0);
  });

  test('5 - trasnform test', () => {
    const objectSchema = object({
      numberList: array(
        object({
          idx: 1,
          intNumber: message('invalid').isString().toInt(),
        })
      ),
    });

    const inputNumber = {
      numberList: [
        {
          intNumber: '2',
        },
      ],
    };
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value.numberList[0].idx).toBe(1);
    expect(result.value.numberList[0].intNumber).toBe(2);
  });

  test('5 - trasnform test', () => {
    const schemaObject = { numberList: [1] };
    const objectSchema = object(schemaObject);

    const inputNumber = null;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toBe(schemaObject);
  });

  test('6 - trasnform tset', () => {
    const schemaObject = { numberList: [1] };
    const objectSchema = object(schemaObject);

    const inputNumber = undefined;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toBe(schemaObject);
  });

  test('7 - trasnform tset', () => {
    const schemaObject = { numberList: [1] };
    const objectSchema = object(schemaObject);

    const inputNumber = 0;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toBe(schemaObject);
  });

  test('8 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = 0;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });

  test('9 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = undefined;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });

  test('10 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = null;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });

  test('11 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = {};
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });
});
