import { Validate } from '../../../../types/Validate';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';
import { isNumber } from '../isNumber';

export const isAllNumber: ValidateMethod<any[]> = (
  value,
  option?: Validate.Number.IsNumberOption
) => {
  for (const i in value) {
    const element = value[i];

    const result = isNumber(element, option);
    const condition = result.valid;
    if (!condition) {
      return new TaskResult(false, value, `Value(Array[${i}]) is not number`);
    }

    value[i] = result.value;
  }

  return new TaskResult(true, value);
};
