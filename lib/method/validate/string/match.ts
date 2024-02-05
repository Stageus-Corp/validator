import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const match: ValidateMethod<string> = (value, regExp: RegExp) => {
  const condition = validator.matches(value, regExp);
  if (!condition) {
    return new TaskResult(false, value, `Value is not match on ${regExp}`);
  }

  return new TaskResult(true, value);
};
