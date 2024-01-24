import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isIn: ValidateMethod<number> = (value, numberList: number[]) => {
  if (!numberList.includes(value)) {
    return new TaskResult(false, value, 'Value is not included');
  }

  return new TaskResult(true, value);
};
