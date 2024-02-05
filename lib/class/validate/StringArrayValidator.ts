import { isAllMatch } from '../../method/validate/stringArray/isAllMatch';
import { Task } from '../Task';
import { Validator } from './Validator';
import { ValidateMethod } from '../../../types/ValidateMethod';
import { TaskResult } from '../TaskResult';
import { isJwt } from '../../method/validate/string/isJwt';

export class StringArrayValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }

  private taskGenerator(
    method: ValidateMethod,
    message: string,
    ...arg: any[]
  ) {
    return new Task((value, ...arg) => {
      for (const i in value) {
        const element = value[i];

        const condition = method(element, ...arg).valid;
        if (!condition) {
          return new TaskResult(false, value, `Value(Array[${i}]) ` + message);
        }
      }

      return new TaskResult(true, value);
    }, ...arg);
  }

  /**
   * Method to ensure that all elements in value satisfy a reg exp
   */
  isAllMatch(regExp: RegExp) {
    this.taskList.push(new Task(isAllMatch, regExp));

    return this;
  }

  isAllJwt() {
    this.taskList.push(this.taskGenerator(isJwt, 'is not jwt'));

    return this;
  }
}
