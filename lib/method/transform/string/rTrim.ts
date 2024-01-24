import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const rTrim: ValidateMethod<string> = (value) => {
  return new TaskResult(true, value.trimEnd());
};
