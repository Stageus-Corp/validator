import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';
import { isInt } from './isInt';
import { range } from './range';

export const isPort: ValidateMethod = (data: number) => {
  const intCondition = isInt(data);

  if (!intCondition.validState) {
    return new TaskResult(false, data, 'Value is not integer');
  }

  const portCondition = range(data, { min: 0, max: 65535 });
  if (!portCondition.validState) {
    return new TaskResult(false, data, 'Value cannot be port number');
  }

  return new TaskResult(true, data);
};
