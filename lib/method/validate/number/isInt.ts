import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isInt: ValidateMethod<number> = (data) => {
  const condition = Number.isInteger(data);
  if (!condition) {
    return new TaskResult(false, data, 'Value is not integer');
  }

  return new TaskResult(true, data);
};
