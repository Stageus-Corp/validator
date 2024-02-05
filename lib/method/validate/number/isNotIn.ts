import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isNotIn: ValidateMethod<number> = (
  value,
  numberList: number[]
) => {
  if (numberList.includes(value)) {
    return new TaskResult(false, value, 'Value is included');
  }

  return new TaskResult(true, value);
};
