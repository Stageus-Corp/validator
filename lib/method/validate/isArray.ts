import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../types/ValidateMethod';

export const isArray: ValidateMethod = (data) => {
  const condition = Array.isArray(data);
  if (!condition) {
    return new TaskResult(false, data, 'Value is not an array');
  }

  return new TaskResult(true, data);
};
