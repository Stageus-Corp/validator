import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const toBoolean: ValidateMethod<number> = (value) => {
  return new TaskResult(true, value === 0 ? false : true);
};
