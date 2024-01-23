import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isEmail: ValidateMethod = (data: string) => {
  const emailRegExp = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const condition = emailRegExp.test(data);
  if (!condition) {
    return new TaskResult(false, data, `Value is not email format`);
  }

  return new TaskResult(true, data);
};
