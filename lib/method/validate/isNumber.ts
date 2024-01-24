import { ValidateMethod } from '../../types/ValidateMethod';
import { TaskResult } from '../../class/TaskResult';

export const isNumber: ValidateMethod<any> = (value) => {
  const condition = typeof value === 'number' && !isNaN(value);
  if (!condition) {
    return new TaskResult(false, value, 'Value is not a number');
  }

  return new TaskResult(true, value);
};
