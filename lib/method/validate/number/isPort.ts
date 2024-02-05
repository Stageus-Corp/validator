import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const isPort: ValidateMethod<number> = (value) => {
  const condition = validator.isPort(value.toString());
  if (!condition) {
    return new TaskResult(false, value, 'Value is not port number');
  }

  return new TaskResult(true, value);
};
