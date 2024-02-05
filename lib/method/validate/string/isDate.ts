import { TaskResult } from '../../../class/TaskResult';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import validator from 'validator';

export const isDate: ValidateMethod<string> = (value) => {
  const condition = validator.isDate(value, {
    format: 'YYYY-MM-DD',
    delimiters: ['-'],
  });
  if (!condition) {
    return new TaskResult(
      false,
      value,
      '"Value is not a valid date format. (e.g. YYYY-MM-DD)"'
    );
  }

  return new TaskResult(true, value);
};
