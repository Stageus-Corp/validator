import { describe, test } from '@jest/globals';
import { message } from '../../../lib';

describe('String Validate Include ( Success )', () => {
  test('1 - success', () => {
    const validator = message().isString();
  });
});
