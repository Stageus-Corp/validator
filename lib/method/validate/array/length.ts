import { TaskResult } from '../../../class/TaskResult';
import { Validate } from '../../../types/Validate';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const length: ValidateMethod<any[]> = (
  value,
  option: Validate.Array.LengthOption
) => {
  const min = option.min === undefined ? -Infinity : option.min;
  const max = option.max === undefined ? +Infinity : option.max;

  const condition = value.length >= min && value.length <= max;
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `Length of array is invalid ( ${min} ~ ${max} )`
    );
  }

  return new TaskResult(true, value);
};
