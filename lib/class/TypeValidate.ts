import { Validate } from '..';
import { isNumber } from '../method/isNumber';
import { range } from '../method/number/range';
import { Task } from './Task';
import { TaskResult } from './TaskResult';

export class TypeValidate extends Validate {
  constructor(
    protected data: any = null,
    protected message: null | string = null,
    protected optionalState: boolean = false,
    protected validState: boolean = true,
    protected taskList: Task[] = [],
    protected originalData: null | any = null
  ) {
    super(data, message, optionalState, validState, taskList, originalData);
  }

  public optional() {
    this.taskList.push(
      new Task((data) => {
        this.optionalState = true;

        return new TaskResult(true);
      })
    );

    return this;
  }

  isNumber() {
    this.taskList.push(new Task(isNumber));

    return new NumberValidate(
      this.data,
      this.message,
      this.optionalState,
      this.validState,
      this.taskList,
      this.originalData
    );
  }
}

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
