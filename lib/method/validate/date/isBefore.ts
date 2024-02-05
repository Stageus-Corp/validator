import validator from 'validator';
import { ValidateMethod } from '../../../../types/ValidateMethod';
import { TaskResult } from '../../../class/TaskResult';

export const isBefore: ValidateMethod<Date> = (value, date: Date) => {
  const condition = validator.isBefore(value.toISOString(), date.toISOString());
  if (!condition) {
    return new TaskResult(
      false,
      value,
      `"${value.toISOString()}" is not earlier than "${date.toISOString()}"`
    );
  }

  return new TaskResult(true, value);
};
