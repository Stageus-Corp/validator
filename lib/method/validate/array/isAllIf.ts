import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isAllIf: ValidateMethod<any[]> = (
  value,
  func: (element: any) => boolean
) => {
  for (const i in value) {
    const element = value[i];
    if (!func(element)) {
      return new TaskResult(false, value, `Value(Array[${i}]) is invalid`);
    }
  }

  return new TaskResult(true, value);
};
