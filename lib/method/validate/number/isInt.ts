import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isInt: ValidateMethod<number> = (value) => {
  const condition = Number.isInteger(value);
  if (!condition) {
    return new TaskResult(false, value, 'Value is not integer');
  }

  return new TaskResult(true, value);
};
