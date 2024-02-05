import validator from 'validator';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';

export const isJson: ValidateMethod<string> = (value) => {
  const condition = validator.isJSON(value);
  if (!condition) {
    return new TaskResult(false, value, 'Value is not json');
  }

  return new TaskResult(true, value);
};
