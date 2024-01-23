import { range } from '../../method/validate/number/range';
import { Task } from '../Task';
import { Validate } from './Validate';

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
}
