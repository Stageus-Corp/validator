import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const isInt: ValidateMethod<number> = (value) => {
  const condition = validator.isInt(value.toString());
  if (!condition) {
    return new TaskResult(false, value, 'Value is not integer');
  }

  return new TaskResult(true, value);
};
