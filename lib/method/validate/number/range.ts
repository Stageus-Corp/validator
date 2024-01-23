import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const range: ValidateMethod = (
  data: number,
  option: { min?: number; max: number } | { min: number; max?: number }
) => {
  const min = option.min === undefined ? -Infinity : option.min;
  const max = option.max === undefined ? +Infinity : option.max;

  if (data < min || data > max) {
    return new TaskResult(
      false,
      data,
      `Value is out of range ( ${min} ~ ${max} )`
    );
  }

  return new TaskResult(true, data);
};
