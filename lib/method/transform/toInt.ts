import { TaskResult } from '../../class/TaskResult';
import { ValidateMethod } from '../../types/ValidateMethod';
import { toNumber } from './toNumber';

export const toInt: ValidateMethod<string> = (value) => {
  const condition = toNumber(value);
  if (!condition.valid) {
    return new TaskResult(
      false,
      value,
      'Value cannot be trasformed into a integer'
    );
  }

  return new TaskResult(true, parseInt(value));
};
