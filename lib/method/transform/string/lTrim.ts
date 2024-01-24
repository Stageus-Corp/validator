import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const lTrim: ValidateMethod<string> = (value) => {
  return new TaskResult(true, value.trimStart());
};
