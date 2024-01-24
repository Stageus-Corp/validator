import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const toNumber: ValidateMethod<string> = (value) => {
  const numberRegExp = /^-?\d*\.?\d+$/;
  const condition = numberRegExp.test(value);
  if (!condition) {
    return new TaskResult(
      false,
      value,
      'Value cannot be transformed into a number'
    );
  }

  return new TaskResult(true, Number(value));
};
