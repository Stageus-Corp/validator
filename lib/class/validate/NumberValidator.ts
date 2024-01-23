import { range } from '../../method/validate/number/range';
import { Task } from '../Task';
import { Validator } from './Validator';
import { isIn } from '../../method/validate/number/isIn';
import { Validate } from '../../types/Validate';

export class NumberValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  range(option: { min?: number; max: number } | { min: number; max?: number }) {
    this.taskList.push(new Task(range, option));

    return this;
  }

  isIn(numberList: number[]) {
    this.taskList.push(new Task(isIn, numberList));

    return this;
  }
}
