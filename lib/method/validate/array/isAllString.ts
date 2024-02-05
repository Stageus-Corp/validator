import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';
import { isString } from '../isString';

export const isAllString: ValidateMethod<any[]> = (value) => {
  for (const i in value) {
    const element = value[i];

    const condition = isString(element).valid;
    if (!condition) {
      return new TaskResult(false, value, `Value(Array[${i}]) is not string`);
    }
  }

  return new TaskResult(true, value);
};
