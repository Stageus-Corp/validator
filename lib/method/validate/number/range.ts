import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import { Validate } from '../../../../types/Validate';

export const range: ValidateMethod<number> = (
  value,
  option: Validate.Number.RangeOption
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
