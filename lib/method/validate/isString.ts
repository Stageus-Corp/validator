import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../types/ValidateMethod';

export const isString: ValidateMethod<any> = (value) => {
  const condition = typeof value === 'string';
  if (!condition) {
    return new TaskResult(false, value, `Value is not string`);
  }

  return new TaskResult(true, value);
};
