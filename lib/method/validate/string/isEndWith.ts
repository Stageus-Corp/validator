import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isEndWith: ValidateMethod = (data: string, endStr: string) => {
  const condition = data.endsWith(endStr);
  if (!condition) {
    return new TaskResult(false, data, `Value does not end with "${data}"`);
  }

  return new TaskResult(true, data);
};
