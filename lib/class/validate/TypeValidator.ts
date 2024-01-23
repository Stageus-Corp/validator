import { isNumber } from '../../method/validate/isNumber';
import { Task } from '../Task';
import { TaskResult } from '../TaskResult';
import { NumberValidator } from './NumberValidator';
import { Validator } from './Validator';

export class TypeValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  public optional() {
    this.taskList.push(
      new Task((data) => {
        if (data === undefined || data === null) {
          return new TaskResult(true, data, null, true);
        }

        return new TaskResult(true, data, null);
      })
    );

    return this;
  }

  public isNumber() {
    this.taskList.push(new Task(isNumber));

    return new NumberValidator(this.message, this.taskList);
  }
}
