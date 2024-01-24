import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isEmpty: ValidateMethod<any> = (value) => {
  const condition = value === null || value === undefined;
  if (!condition) {
    return new TaskResult(false, value, 'Value is not empty');
  }

  return new TaskResult(true, value);
};
