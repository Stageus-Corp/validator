import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const toInt: ValidateMethod<number> = (value) => {
  return new TaskResult(true, Math.floor(value));
};
