import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const setDefault: ValidateMethod<any> = (value, defaultValue: any) => {
  const condition = value === null || value === undefined;
  if (condition) {
    return new TaskResult(true, defaultValue);
  }

  return new TaskResult(true, value);
};
