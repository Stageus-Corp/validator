import { lTrim } from '../../method/transform/string/lTrim';
import { rTrim } from '../../method/transform/string/rTrim';
import { split } from '../../method/transform/string/split';
import { toBoolean } from '../../method/transform/string/toBoolean';
import { toInt } from '../../method/transform/string/toInt';
import { toNumber } from '../../method/transform/string/toNumber';
import { trim } from '../../method/transform/string/trim';
import { include } from '../../method/validate/string/include';
import { isDate } from '../../method/validate/string/isDate';
import { isDateTime } from '../../method/validate/string/isDateTime';
import { isEmail } from '../../method/validate/string/isEmail';
import { isEndWith } from '../../method/validate/string/isEndWith';
import { isHangeul } from '../../method/validate/string/isHangeul';
import { isJwt } from '../../method/validate/string/isJwt';
import { isOnlyAlphabet } from '../../method/validate/string/isOnlyAlphabet';
import { isPw } from '../../method/validate/string/isPw';
import { isStartWith } from '../../method/validate/string/isStartWith';
import { length } from '../../method/validate/string/length';
import { match } from '../../method/validate/string/match';
import { Validate } from '../../types/Validate';
import { Task } from '../Task';
import { ArrayValidator } from './ArrayValidator';
import { BooleanValidator } from './BooleanValidator';
import { NumberValidator } from './NumberValidator';
import { StringArrayValidator } from './StringArrayValidator';
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
   */
  isHanguel(option: Validate.String.IsHanguelOption) {
    this.taskList.push(new Task(isHangeul, option));

    return this;
  }

  /**
   * Method for determining the length of an array
   */
  length(option: Validate.String.LengthOption) {
    this.taskList.push(new Task(length, option));

    return this;
  }

  /**
   * Method of verifying that value satisfies a regular expression
   */
  match(regExp: RegExp) {
    this.taskList.push(new Task(match, regExp));

    return this;
  }

  /**
   * Method to verify that value contains only alphabets
   */
  isOnlyAlphabet() {
    this.taskList.push(new Task(isOnlyAlphabet));

    return this;
  }

  /**
   * Method to determine if value is in date format
   */
  isDate() {
    this.taskList.push(new Task(isDate));

    return this;
  }

  /**
   * Method to determine if value is in date format containing time
   */
  isDateTime() {
    this.taskList.push(new Task(isDateTime));

    return this;
  }

  /**
   * Method of verifying that value is in password format
   */
  isPw(option?: Validate.String.IsPwOption) {
    this.taskList.push(new Task(isPw, option));

    return this;
  }

  /**
   * Method to determine if value is jwt
   */
  isJwt() {
    this.taskList.push(new Task(isJwt));

    return this;
  }

  /**
   * Method to determine if value is a string ending with input string
   */
  isEndWith(endStr: string) {
    this.taskList.push(new Task(isEndWith, endStr));

    return this;
  }

  /**
   * Method to determine if value is a string starting with input string
   */
  isStartWith(startStr: string) {
    this.taskList.push(new Task(isStartWith, startStr));

    return this;
  }

  /**
   * Method to determin if value contains a string
   */
  include(includeStr: string) {
    this.taskList.push(new Task(include, includeStr));

    return this;
  }

  /**
   * Method to transform value to a number
   */
  toNumber() {
    this.taskList.push(new Task(toNumber));

    return new NumberValidator(this.message, this.taskList);
  }

  /**
   * Method to transform value to a integer
   */
  toInt() {
    this.taskList.push(new Task(toInt));

    return new NumberValidator(this.message, this.taskList);
  }

  /**
   * Method to transform value to a boolean
   */
  toBoolean() {
    this.taskList.push(new Task(toBoolean));

    return new BooleanValidator(this.message, this.taskList);
  }

  /**
   * Method to split value as an array
   */
  split(flag: string) {
    this.taskList.push(new Task(split, flag));

    return new StringArrayValidator(this.message, this.taskList);
  }

  /**
   * Method to claer spaces at both ends of value
   */
  trim() {
    this.taskList.push(new Task(trim));

    return this;
  }

  /**
   * Method to clear spcaes at the right end
   */
  rTrim() {
    this.taskList.push(new Task(rTrim));

    return this;
  }

  /**
   * Method to clear spcaes at the left end
   */
  lTrim() {
    this.taskList.push(new Task(lTrim));

    return this;
  }
}
