import { Validate } from '../../types/Validate';
import { RunResult } from '../RunResult';
import { Task } from '../Task';

export class Validator {
  constructor(
    protected message: null | string = null,
    protected taskList: Task[] = []
  ) {}

  public run(originalData: any) {
    const taskList = this.taskList;
    let data = originalData;

    for (const task of taskList) {
      const result = task.method(data, ...task.argument);

      // set message when default message is null
      if (result.message && !this.message) {
        this.message = result.message;
      }
      data = result.data;

      // force exit
      if (result.forceExit) {
        return new RunResult(
          result.validState,
          this.message,
          data,
          originalData
        );
      }

      // Success
      if (result.validState) {
        continue;
      }

      // Fail
      return new RunResult(false, this.message, data, originalData);
    }

    return new RunResult(true, null, data, originalData);
  }
}
