import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';

export const isStartWith: ValidateMethod<string> = (
  value,
  startStr: string
) => {
  const condition = value.startsWith(startStr);
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `Value does not start with "${startStr}"`
    );
  }

  return new TaskResult(true, value);
};
