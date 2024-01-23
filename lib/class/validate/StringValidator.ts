import { isEmail } from '../../method/validate/string/isEmail';
import { isHangeul } from '../../method/validate/string/isHangeul';
import { isOnlyAlphabet } from '../../method/validate/string/isOnlyAlphabet';
import { length } from '../../method/validate/string/length';
import { match } from '../../method/validate/string/match';
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

  /**
   * A method of evaluating whether or not it is in hanguel
   * @param option default value of complete is false, default value of space is false
   */
  isHanguel(option: {
    complete?: boolean; // default false
    space?: boolean; // default false
  }) {
    this.taskList.push(new Task(isHangeul, option));

    return this;
  }

  length(
    option: { min?: number; max: number } | { min: number; max?: number }
  ) {
    this.taskList.push(new Task(length, option));

    return this;
  }

  match(regExp: RegExp) {
    this.taskList.push(new Task(match, regExp));

    return this;
  }

  isOnlyAlphabet() {
    this.taskList.push(new Task(isOnlyAlphabet));

    return this;
  }
}
