import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isAllNotNull: ValidateMethod<any[]> = (value) => {
  for (const i in value) {
    const element = value[i];

    const condition = element !== null && element !== undefined;
    if (!condition) {
      return new TaskResult(false, value, `Value(Array[${i}]) is null`);
    }
  }

  return new TaskResult(true, value);
};
