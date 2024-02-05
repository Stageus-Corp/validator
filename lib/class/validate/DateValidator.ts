import { isBefore } from '../../method/validate/date/isBefore';
import { Task } from '../Task';
import { Validator } from './Validator';

export class DateValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  isBefore(date: Date) {
    this.taskList.push(new Task(isBefore, date));

    return this;
  }
}
