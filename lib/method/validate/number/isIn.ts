import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isIn: ValidateMethod = (data: number, numberList: number[]) => {
  if (!numberList.includes(data)) {
    return new TaskResult(false, data, 'Value is not included');
  }

  return new TaskResult(true, data);
};
