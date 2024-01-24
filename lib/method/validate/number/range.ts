import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const range: ValidateMethod<number> = (
  value,
  option: { min?: number; max: number } | { min: number; max?: number }
) => {
  const min = option.min === undefined ? -Infinity : option.min;
  const max = option.max === undefined ? +Infinity : option.max;

  if (value < min || value > max) {
    return new TaskResult(
      false,
      value,
      `Value is out of range ( ${min} ~ ${max} )`
    );
  }

  return new TaskResult(true, value);
};
