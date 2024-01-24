import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isArray: ValidateMethod<any> = (value) => {
  const condition = Array.isArray(value);
  if (!condition) {
    return new TaskResult(false, value, 'Value is not an array');
  }

  return new TaskResult(true, value);
};
