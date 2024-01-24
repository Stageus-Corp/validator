import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isNotIn: ValidateMethod<number> = (data, numberList: number[]) => {
  if (numberList.includes(data)) {
    return new TaskResult(false, data, 'Value is included');
  }

  return new TaskResult(true, data);
};
