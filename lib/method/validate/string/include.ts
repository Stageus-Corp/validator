import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const include: ValidateMethod<string> = (value, str: string) => {
  return new TaskResult(true, value);
};
