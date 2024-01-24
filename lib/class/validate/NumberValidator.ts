import { range } from '../../method/validate/number/range';
import { Task } from '../Task';
import { Validator } from './Validator';
import { isIn } from '../../method/validate/number/isIn';
import { isNotIn } from '../../method/validate/number/isNotIn';
import { isInt } from '../../method/validate/number/isInt';
import { isPort } from '../../method/validate/number/isPort';
import { toInt } from '../../method/transform/string/toInt';
import { toString } from '../../method/transform/number/toString';
import { StringValidator } from './StringValidator';
import { toBoolean } from '../../method/transform/number/toBoolean';
import { BooleanValidator } from './BooleanValidator';

export class NumberValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  /**
   * Method for examining numeric ranges
   */
  range(option: { min?: number; max: number } | { min: number; max?: number }) {
    this.taskList.push(new Task(range, option));

    return this;
  }

  /**
   * Method of checking for specific values
   */
  isIn(numberList: number[]) {
    this.taskList.push(new Task(isIn, numberList));

    return this;
  }

  /**
   * Method of checking that there are no specific values
   */
  isNotIn(numberList: number[]) {
    this.taskList.push(new Task(isNotIn, numberList));

    return this;
  }

  /**
   * Method to determine if it is an integer
   */
  isInt() {
    this.taskList.push(new Task(isInt));

    return this;
  }

  /**
   * Method to determine if a number is available as a port
   */
  isPort() {
    this.taskList.push(new Task(isPort));

    return this;
  }

  /**
   * Method to transform value to integer
   */
  toInt() {
    this.taskList.push(new Task(toInt));

    return this;
  }

  /**
   * Method to transform value to string type
   */
  toString() {
    this.taskList.push(new Task(toString));

    return new StringValidator(this.message, this.taskList);
  }

  /**
   * Method to transform value to boolena type
   */
  toBoolean() {
    this.taskList.push(new Task(toBoolean));

    return new BooleanValidator(this.message, this.taskList);
  }
}
