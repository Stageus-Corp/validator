import { isAllIf } from '../../method/validate/array/isAllIf';
import { length } from '../../method/validate/array/length';
import { Task } from '../Task';
import { Validator } from './Validator';

export class ArrayValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  legnth(
    option: { min?: number; max: number } | { min: number; max?: number }
  ) {
    this.taskList.push(new Task(length, option));
    return this;
  }

  isAllIf(func: (element: any) => boolean) {
    this.taskList.push(new Task(isAllIf, func));

    return this;
  }
}
