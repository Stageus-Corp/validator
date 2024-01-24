import { isAllIf } from '../../method/validate/array/isAllIf';
import { isAllNotNull } from '../../method/validate/array/isAllNotNull';
import { length } from '../../method/validate/array/length';
import { Validate } from '../../types/Validate';
import { Task } from '../Task';
import { Validator } from './Validator';

export class ArrayValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  /**
   * Method to check the length of an array
   * @returns
   */
  legnth(option: Validate.Array.LengthOption) {
    this.taskList.push(new Task(length, option));

    return this;
  }

  /**
   * Method for check that all elements in an array are not null
   */
  isAllNotNull() {
    this.taskList.push(new Task(isAllNotNull));

    return this;
  }

  /**
   * A method that allows you to create a custom function to inspect elements in array directly
   * @param func A function that determines whether an element of an array is true or false when it enters a function
   */
  isAllIf(func: (element: any) => boolean) {
    this.taskList.push(new Task(isAllIf, func));

    return this;
  }
}
