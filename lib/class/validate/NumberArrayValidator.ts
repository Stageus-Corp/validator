import { Validate } from '../../../types/Validate';
import { ValidateMethod } from '../../../types/ValidateMethod';
import { isIn } from '../../method/validate/number/isIn';
import { isInt } from '../../method/validate/number/isInt';
import { isNotIn } from '../../method/validate/number/isNotIn';
import { isPort } from '../../method/validate/number/isPort';
import { range } from '../../method/validate/number/range';
import { Task } from '../Task';
import { TaskResult } from '../TaskResult';
import { Validator } from './Validator';

export class NumberArrayValidator extends Validator {
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

  isAllInt() {
    this.taskList.push(this.taskGenerator(isInt, 'is not integer'));

    return this;
  }

  isAllIn(numberList: number[]) {
    this.taskList.push(
      this.taskGenerator(
        isIn,
        `is not included in [${numberList.toString()}]`,
        numberList
      )
    );

    return this;
  }

  isAllNotIn(numberList: number[]) {
    this.taskList.push(
      this.taskGenerator(
        isNotIn,
        `is included in [${numberList.toString()}]`,
        numberList
      )
    );

    return this;
  }

  isAllPort() {
    this.taskList.push(this.taskGenerator(isPort, 'is not port number'));

    return this;
  }

  allRange(option: Validate.Number.RangeOption) {
    const min = option.min === undefined ? -Infinity : option.min;
    const max = option.max === undefined ? +Infinity : option.max;

    this.taskList.push(
      this.taskGenerator(range, `is out of range ( ${min} ~ ${max} )`, option)
    );

    return this;
  }
}
