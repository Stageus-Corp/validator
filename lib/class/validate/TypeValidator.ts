import { isArray } from '../../method/validate/isArray';
import { isNumber } from '../../method/validate/isNumber';
import { isString } from '../../method/validate/isString';
import { Task } from '../Task';
import { TaskResult } from '../TaskResult';
import { ArrayValidator } from './ArrayValidator';
import { NumberValidator } from './NumberValidator';
import { StringValidator } from './StringValidator';
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

  public isArray() {
    this.taskList.push(new Task(isArray));

    return new ArrayValidator(this.message, this.taskList);
  }

  public isString() {
    this.taskList.push(new Task(isString));

    return new StringValidator(this.message, this.taskList);
  }
}
