import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isStartWith: ValidateMethod<string> = (data, startStr: string) => {
  const condition = data.startsWith(startStr);
  if (!condition) {
    return new TaskResult(false, data, `Value does not start with "${data}"`);
  }

  return new TaskResult(true, data);
};
