import { Validate } from '../..';
import { range } from '../../method/number/range';
import { Task } from '../Task';

export class NumberValidate extends Validate {
  constructor(
    protected data: number,
    protected message: null | string = null,
    protected optionalState: boolean = false,
    protected validState: boolean = true,
    protected taskList: Task[] = [],
    protected originalData: null | any = null
  ) {
    super(data, message, optionalState, validState, taskList, originalData);
  }

  range(option: { min?: number; max: number } | { min: number; max?: number }) {
    this.taskList.push(new Task(range, option));

    return this;
  }
}
