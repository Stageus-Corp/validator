import { TaskResult } from '../../class/TaskResult';
import { Validate } from '../../../types/Validate';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isBoolean: ValidateMethod<any> = (
  value,
  option?: Validate.Boolean.IsBooleanOption
) => {
  const strict = option?.strict || false;

  if (!strict && typeof value === 'string') {
    if (value === 'true') {
      return new TaskResult(true, true);
    }

    if (value === 'false') {
      return new TaskResult(true, false);
    }

    return new TaskResult(false, value, 'Value is not boolean');
  }

  const condition = typeof value === 'boolean';
  if (!condition) {
    return new TaskResult(false, value, 'Value is not boolean');
  }

  return new TaskResult(true, value);
};
