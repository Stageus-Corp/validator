import { isEmail } from '../../method/validate/string/isEmail';
import { Task } from '../Task';
import { Validator } from './Validator';

export class StringValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  isEmail() {
    this.taskList.push(new Task(isEmail));

    return this;
  }
}
