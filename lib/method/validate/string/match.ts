import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const match: ValidateMethod<string> = (value, regExp: RegExp) => {
  const condition = regExp.test(value);
  if (!condition) {
    return new TaskResult(false, value, `Value is not match on ${regExp}`);
  }

  return new TaskResult(true, value);
};
