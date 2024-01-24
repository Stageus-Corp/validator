import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const isAllIf: ValidateMethod<any[]> = (
  data,
  func: (element: any) => boolean
) => {
  for (const i in data) {
    const element = data[i];
    if (!func(element)) {
      return new TaskResult(false, data, `Value(Array[${i}]) is invalid`);
    }
  }

  return new TaskResult(true, data);
};
