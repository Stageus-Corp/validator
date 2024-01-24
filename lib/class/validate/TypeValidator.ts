import { setDefault } from '../../method/validate/default';
import { isArray } from '../../method/validate/isArray';
import { isBoolean } from '../../method/validate/isBoolean';
import { isEmpty } from '../../method/validate/isEmpty';
import { isNumber } from '../../method/validate/isNumber';
import { isString } from '../../method/validate/isString';
import { optional } from '../../method/validate/optional';
import { Validate } from '../../../types/Validate';
import { Task } from '../Task';
import { ArrayValidator } from './ArrayValidator';
import { BooleanValidator } from './BooleanValidator';
import { NumberValidator } from './NumberValidator';
import { StringValidator } from './StringValidator';
import { Validator } from './Validator';

export class TypeValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  /**
   * Method to allow entered values to be null or undeﬁned
   */
  public optional() {
    this.taskList.push(new Task(optional));

    return this;
  }

  /**
   * Method that add default value
   */
  public default(defaultValue: any) {
    this.taskList.push(new Task(setDefault, defaultValue));

    return this;
  }

  /**
   * Method to determine if the value is of a numeric type
   */
  public isNumber(option?: Validate.Number.IsNumberOption) {
    this.taskList.push(new Task(isNumber, option));

    return new NumberValidator(this.message, this.taskList);
  }

  /**
   * Method to determine if the value is of a array type
   */
  public isArray() {
    this.taskList.push(new Task(isArray));

    return new ArrayValidator(this.message, this.taskList);
  }

  /**
   * Method to determine if the value is of a string type
   */
  public isString(option?: Validate.String.IsStringOption) {
    this.taskList.push(new Task(isString, option));

    return new StringValidator(this.message, this.taskList);
  }

  /**
   * Method to determine if the value is of a boolean type or 'true' or 'false'
   */
  public isBoolean(option?: Validate.Boolean.IsBooleanOption) {
    this.taskList.push(new Task(isBoolean, option));

    return new BooleanValidator(this.message, this.taskList);
  }

  /**
   * Method to determin if the value is null or undefined
   */
  public isEmpty() {
    this.taskList.push(new Task(isEmpty));

    return new Validator(this.message, this.taskList);
  }
}
