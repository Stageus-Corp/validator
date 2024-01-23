import { ValidateMethod } from '../../types/ValidateMethod';
import { TaskResult } from '../../class/TaskResult';

export const isNumber: ValidateMethod = (data) => {
  const condition = typeof data === 'number' && !isNaN(data);
  if (!condition) {
    return new TaskResult(false, data, 'Value is not a number');
  }

  return new TaskResult(true, data);
};
