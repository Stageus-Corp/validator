import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';
import { isInt } from './isInt';
import { range } from './range';

export const isPort: ValidateMethod<number> = (value) => {
  const intCondition = isInt(value);
  if (!intCondition.valid) {
    return new TaskResult(false, value, 'Value is not integer');
  }

  const portCondition = range(value, { min: 0, max: 65535 });
  if (!portCondition.valid) {
    return new TaskResult(false, value, 'Value cannot be port number');
  }

  return new TaskResult(true, value);
};
