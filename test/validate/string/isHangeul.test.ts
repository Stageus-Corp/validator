import { describe, expect, test } from '@jest/globals';
import { message } from '../../../lib';

describe('isHanguel method test', () => {
  test('1 - isHangeul ( Success )', () => {
    const validator = message().isString().isHanguel({
      complete: false,
      space: false,
    });
    const inputValue = '한글테스트입니다';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('2 - isHangeul alphabet test ( Fail )', () => {
    const validator = message().isString().isHanguel({
      complete: false,
      space: false,
    });
    const inputValue = '한글dd테스트입니다';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('3 - isHanguel complet option test ( Fail )', () => {
    const validator = message().isString().isHanguel({
      complete: true,
      space: false,
    });
    const inputValue = 'ㅎㄱ';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('4 - isHanguel space option ( Success )', () => {
    const validator = message().isString().isHanguel({
      complete: true,
      space: true,
    });
    const inputValue = '한 글';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(true);
    expect(result.message).toBe(null);
    expect(result.value).toBe(inputValue);
  });

  test('5 - isHanguel space option ( Fail )', () => {
    const validator = message().isString().isHanguel({
      complete: true,
      space: false,
    });
    const inputValue = '한 글';

    const result = validator.run(inputValue);

    expect(result.valid).toBe(false);
    expect(result.message).not.toBe(null);
    expect(result.value).toBe(inputValue);
  });
});
