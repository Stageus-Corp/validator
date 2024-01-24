import { TaskResult } from '../../../class/TaskResult';
import { Validate } from '../../../types/Validate';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const length: ValidateMethod<string> = (
  value,
  option: Validate.String.LengthOption
) => {
  const min = option.min === undefined ? -Infinity : option.min;
  const max = option.max === undefined ? +Infinity : option.max;

  const condition = value.length >= min && value.length <= max;
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `Length of string is invalid ( ${min} ~ ${max} )`
    );
  }

  return new TaskResult(true, value);
};
