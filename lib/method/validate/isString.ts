import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../types/ValidateMethod';

export const isString: ValidateMethod<any> = (data) => {
  const condition = typeof data === 'string';
  if (!condition) {
    return new TaskResult(false, data, `Value is not string`);
  }

  return new TaskResult(true, data);
};
