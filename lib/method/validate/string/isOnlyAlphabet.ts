import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isOnlyAlphabet: ValidateMethod<string> = (value) => {
  const regExp = /^[a-zA-Z]+$/;

  const condition = regExp.test(value);
  if (!condition) {
    return new TaskResult(false, value, `Value is not only alphabet`);
  }

  return new TaskResult(true, value);
};
