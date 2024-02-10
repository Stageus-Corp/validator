import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';

export const isIn: ValidateMethod<string> = (value, stringList: string[]) => {
  const condition = stringList.includes(value);
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `Value is not included in [${stringList.toString()}]`
    );
  }

  return new TaskResult(true, value, null);
};
