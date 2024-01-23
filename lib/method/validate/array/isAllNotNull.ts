import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isAllNotNull: ValidateMethod = (data: any[]) => {
  for (const i in data) {
    const element = data[i];

    const condition = element !== null && element !== undefined;
    if (!condition) {
      return new TaskResult(false, data, `Value(Array[${i}]) is null`);
    }
  }

  return new TaskResult(true, data);
};
