import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const length: ValidateMethod = (
  data: any[],
  option: { min?: number; max: number } | { min: number; max?: number }
) => {
  const min = option.min === undefined ? -Infinity : option.min;
  const max = option.max === undefined ? +Infinity : option.max;

  const condition = data.length >= min && data.length <= max;
  if (!condition) {
    return new TaskResult(
      false,
      data,
      `Length of array is invalid ( ${min} ~ ${max} )`
    );
  }

  return new TaskResult(true, data);
};
