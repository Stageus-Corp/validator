import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const toBoolean: ValidateMethod<string> = (value) => {
  if (!['true', 'false'].includes(value)) {
    return new TaskResult(
      false,
      value,
      'Value cannot be trasnformed to boolean'
    );
  }

  return new TaskResult(true, value === 'true' ? true : false);
};
