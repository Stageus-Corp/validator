import { Validate } from '../../../types/Validate';
import { Task } from '../Task';
import { Validator } from './Validator';

export class BooleanValidator extends Validator {
  constructor(message: null | string = null, taskList: Task[] = []) {
    super(message, taskList);
  }
}
