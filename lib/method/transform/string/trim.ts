import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const trim: ValidateMethod<string> = (value) => {
  return new TaskResult(true, value.trim());
};
