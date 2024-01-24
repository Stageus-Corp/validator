import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isEmail: ValidateMethod<string> = (value) => {
  const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const condition = emailRegExp.test(value);
  if (!condition) {
    return new TaskResult(false, value, `Value is not email format`);
  }

  return new TaskResult(true, value);
};
