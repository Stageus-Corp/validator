import { range } from '../../method/validate/number/range';
import { Task } from '../Task';
import { Validate } from './Validate';
import { isIn } from '../../method/validate/number/isIn';

export class NumberValidate extends Validate {
  constructor(
    protected message: null | string = null,
    protected taskList: Task[] = []
  ) {
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
