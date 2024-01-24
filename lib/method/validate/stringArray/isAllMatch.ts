import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isAllMatch: ValidateMethod<string[]> = (value, regExp: RegExp) => {
  for (const i in value) {
    const element = value[i];

    const condition = regExp.test(element);
    if (!condition) {
      return new TaskResult(
        false,
        value,
        `Array[${i}] is not match on ${regExp}`
      );
    }
  }

  return new TaskResult(true, value);
};
