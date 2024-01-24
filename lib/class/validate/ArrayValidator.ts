import { isAllIf } from '../../method/validate/array/isAllIf';
import { isAllNotNull } from '../../method/validate/array/isAllNotNull';
import { length } from '../../method/validate/array/length';
import { Validate } from '../../types/Validate';
import { Task } from '../Task';
import { Validator } from './Validator';

export class ArrayValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  legnth(option: Validate.Array.LengthOption) {
    this.taskList.push(new Task(length, option));

    return this;
  }

  isAllNotNull() {
    this.taskList.push(new Task(isAllNotNull));

    return this;
  }

  isAllIf(func: (element: any) => boolean) {
    this.taskList.push(new Task(isAllIf, func));

    return this;
  }
}
