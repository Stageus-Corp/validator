import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const isJwt: ValidateMethod<string> = (value) => {
  const condition = validator.isJWT(value);
  if (!condition) {
    return new TaskResult(false, value, 'Value is not jwt');
  }

  return new TaskResult(true, value);
};
