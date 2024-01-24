import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../types/ValidateMethod';

export const include: ValidateMethod<string> = (value, includeStr: string) => {
  const condition = value.includes(includeStr);
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `Value does not contain "${includeStr}"`
    );
  }

  return new TaskResult(true, value);
};
