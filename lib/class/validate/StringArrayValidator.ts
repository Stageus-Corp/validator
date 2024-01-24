import { isAllMatch } from '../../method/validate/stringArray/isAllMatch';
import { Validate } from '../../types/Validate';
import { Task } from '../Task';
import { Validator } from './Validator';

export class StringArrayValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  /**
   * Method to ensure that all elements in value satisfy a reg exp
   */
  isAllMatch(regExp: RegExp) {
    this.taskList.push(new Task(isAllMatch, regExp));

    return this;
  }
}
