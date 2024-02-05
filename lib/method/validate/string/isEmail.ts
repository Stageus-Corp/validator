import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const isEmail: ValidateMethod<string> = (value) => {
  const condition = validator.isEmail(value);
  if (!condition) {
    return new TaskResult(false, value, `Value is not email format`);
  }

  return new TaskResult(true, value);
};
