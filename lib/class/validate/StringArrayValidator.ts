import { Task } from '../Task';
import { Validator } from './Validator';
import { ValidateMethod } from '../../../types/ValidateMethod';
import { TaskResult } from '../TaskResult';
import { isJwt } from '../../method/validate/string/isJwt';
import { isJson } from '../../method/validate/string/isJson';
import { match } from '../../method/validate/string/match';
import { include } from '../../method/validate/string/include';
import { Validate } from '../../../types/Validate';
import { length } from '../../method/validate/string/length';
import { isStartWith } from '../../method/validate/string/isStartWith';

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
    this.taskList.push(
      this.taskGenerator(match, `is not match on ${regExp}`, regExp)
    );

    return this;
  }

  isAllJwt() {
    this.taskList.push(this.taskGenerator(isJwt, 'is not jwt'));

    return this;
  }

  isAllJson() {
    this.taskList.push(this.taskGenerator(isJson, 'is not json'));

    return this;
  }

  allInclude(includeStr: string) {
    this.taskList.push(
      this.taskGenerator(
        include,
        `does not contain "${includeStr}"`,
        includeStr
      )
    );

    return this;
  }

  allLength(option: Validate.String.LengthOption) {
    const min = option.min === undefined ? -Infinity : option.min;
    const max = option.max === undefined ? +Infinity : option.max;
    this.taskList.push(
      this.taskGenerator(
        length,
        `length is out of range ( ${min} ~ ${max} )`,
        option
      )
    );

    return this;
  }

  isAllStartWith(startStr: string) {
    this.taskList.push(
      this.taskGenerator(
        isStartWith,
        `does not start with "${startStr}"`,
        startStr
      )
    );

    return this;
  }
}
