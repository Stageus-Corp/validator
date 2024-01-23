import { isNumber } from '../../method/isNumber';
import { Task } from '../Task';
import { TaskResult } from '../TaskResult';
import { NumberValidate } from './NumberValidate';
import { Validate } from './Validate';

export class TypeValidate extends Validate {
  constructor(
    protected message: null | string = null,
    protected taskList: Task[] = []
  ) {
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

    return new NumberValidate(this.message, this.taskList);
  }
}
