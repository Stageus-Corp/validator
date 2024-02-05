import { ValidateMethod } from '../../../types/ValidateMethod';
import { Task } from '../Task';
import { TaskResult } from '../TaskResult';
import { Validator } from './Validator';

export class NumberArrayValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  private taskGenerator(
    method: ValidateMethod,
    message: string,
    ...arg: any[]
  ) {
    return new Task((value, ...arg) => {
      for (const i in value) {
        const element = value[i];

        const condition = method(element, ...arg).valid;
        if (!condition) {
          return new TaskResult(false, value, `Value(Array[${i}]) ` + message);
        }
      }

      return new TaskResult(true, value);
    }, ...arg);
  }
}
