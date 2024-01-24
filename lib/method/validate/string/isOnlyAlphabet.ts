import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isOnlyAlphabet: ValidateMethod<string> = (data) => {
  const regExp = /^[a-zA-Z]+$/;

  const condition = regExp.test(data);
  if (!condition) {
    return new TaskResult(false, data, `Value is not only alphabet`);
  }

  return new TaskResult(true, data);
};
