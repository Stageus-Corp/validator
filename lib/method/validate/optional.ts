import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../types/ValidateMethod';

export const optional: ValidateMethod<any> = (value) => {
  if (value === undefined || value === null) {
    return new TaskResult(true, value, null, true);
  }

  return new TaskResult(true, value);
};
