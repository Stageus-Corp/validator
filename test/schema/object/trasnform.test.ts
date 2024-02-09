import { describe, expect, test } from '@jest/globals';
import { array, message, object } from '../../../lib';

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

  test('6 - trasnform test', () => {
    const schemaObject = { numberList: [1] };
    const objectSchema = object(schemaObject);

    const inputNumber = null;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toStrictEqual(schemaObject);
  });

  test('7 - trasnform tset', () => {
    const schemaObject = { numberList: [1] };
    const objectSchema = object(schemaObject);

    const inputNumber = undefined;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toStrictEqual(schemaObject);
  });

  test('8 - trasnform tset', () => {
    const schemaObject = { numberList: [1] };
    const objectSchema = object(schemaObject);

    const inputNumber = 0;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(true);
    expect(result.value).toStrictEqual(schemaObject);
  });

  test('9 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = 0;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });

  test('10 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = undefined;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });

  test('11 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = null;
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });

  test('12 - trasnform tset ( Fail )', () => {
    const schemaObject = { numberList: [1], idx: message().isNumber() };
    const objectSchema = object(schemaObject);

    const inputNumber = {};
    const result = objectSchema.run(inputNumber);

    expect(result.valid).toBe(false);
  });
});
