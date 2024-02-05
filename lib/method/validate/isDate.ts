import validator from 'validator';
import { ValidateMethod } from '../../../types/ValidateMethod';
import { TaskResult } from '../../class/TaskResult';

export const isDate: ValidateMethod<any> = (value) => {
  if (typeof value === 'string') {
    const condition = validator.isISO8601(value);
    if (!condition) {
      return new TaskResult(false, value, 'Value cannot be Date');
    }
  }

  if (value instanceof Date) {
    return new TaskResult(true, value);
  }

  if (new Date(value).toString() === 'Invalid Date') {
    return new TaskResult(false, value, 'Value cannot be Date');
  }

  return new TaskResult(true, new Date(value));
};
