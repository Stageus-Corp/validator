import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const split: ValidateMethod<string> = (value, flag: string) => {
  return new TaskResult(true, value.split(flag));
};
