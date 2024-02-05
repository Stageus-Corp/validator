import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';

export const toDate: ValidateMethod<string> = (value) => {
  const date = new Date(value);

  const condition = !(date.toString() === 'Invalid Date');
  if (!condition) {
    return new TaskResult(false, value, 'Value cannot be Date');
  }

  return new TaskResult(true, date);
};
