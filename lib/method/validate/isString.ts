import { TaskResult } from '../../class/TaskResult';
import { Validate } from '../../../types/Validate';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isString: ValidateMethod<any> = (
  value,
  option?: Validate.String.IsStringOption
) => {
  const allowNumber = option?.allowNumber || false;

  if (allowNumber) {
    if (typeof value === 'number') {
      value = value.toString();
    }
  }

  const condition = typeof value === 'string';
  if (!condition) {
    return new TaskResult(false, value, `Value is not string`);
  }

  return new TaskResult(true, value);
};
