import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const include: ValidateMethod<string> = (value, includeStr: string) => {
  const condition = validator.contains(value, includeStr);
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `Value does not contain "${includeStr}"`
    );
  }

  return new TaskResult(true, value);
};
