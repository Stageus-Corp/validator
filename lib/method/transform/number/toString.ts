import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const toString: ValidateMethod<number> = (value) => {
  return new TaskResult(true, value.toString());
};
