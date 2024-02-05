import validator from 'validator';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';

export const isAfter: ValidateMethod<Date> = (value, date: Date) => {
  const condition = validator.isAfter(value.toISOString(), date.toISOString());
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `"${value.toISOString()}" is earlier than "${date.toISOString()}"`
    );
  }

  return new TaskResult(true, value);
};
