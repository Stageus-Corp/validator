import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isEndWith: ValidateMethod<string> = (value, endStr: string) => {
  const condition = value.endsWith(endStr);
  if (!condition) {
    return new TaskResult(false, value, `Value does not end with "${value}"`);
  }

  return new TaskResult(true, value);
};
