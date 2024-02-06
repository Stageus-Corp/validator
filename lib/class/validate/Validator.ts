import { RunResult } from '../RunResult';
import { Task } from '../Task';

export class Validator {
  constructor(
    protected message: null | string = null,
    protected taskList: Task[] = []
  ) {}

  /**
   * Method to evaluate the validity of a value by running method chaining
   */
  public run(original: any) {
    const taskList = this.taskList;
    let value = original;

    for (const task of taskList) {
      const result = task.method(value, ...task.argument);

      // set message when default message is null
      if (result.message && !this.message) {
        this.message = result.message;
      }
      value = result.value;

      // for optional method
      if (result.forceExit) {
        return new RunResult(result.valid, this.message, value, original);
      }

      // Success
      if (result.valid) {
        continue;
      }

      // Fail
      return new RunResult(false, this.message, value, original);
    }

    return new RunResult(true, null, value, original);
  }
}
