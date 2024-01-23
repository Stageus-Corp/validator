import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const match: ValidateMethod = (data: string, regExp: RegExp) => {
  const condition = regExp.test(data);
  if (!condition) {
    return new TaskResult(false, data, `Value is not match on ${regExp}`);
  }

  return new TaskResult(true, data);
};
