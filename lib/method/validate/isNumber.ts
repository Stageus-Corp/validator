import { ValidateMethod } from '../../../types/ValidateMethod';
import { TaskResult } from '../../class/TaskResult';
import { Validate } from '../../../types/Validate';
import { toNumber } from '../transform/string/toNumber';

export const isNumber: ValidateMethod<any> = (
  value,
  option?: Validate.Number.IsNumberOption
) => {
  const strict = option?.strict || false;

  if (!strict && typeof value !== 'number') {
    if (typeof value !== 'string') {
      return new TaskResult(false, value, 'Value is not a number');
    }

    const condition = toNumber(value);
    if (!condition.valid) {
      return new TaskResult(false, value, 'Value is not a number');
    }

    return new TaskResult(true, Number(value));
  }

  const condition = typeof value === 'number' && !isNaN(value);
  if (!condition) {
    return new TaskResult(false, value, 'Value is not a number');
  }

  return new TaskResult(true, value);
};
