import { RunResult } from '../RunResult';
import { Task } from '../Task';
import { TaskResult } from '../TaskResult';

export class Validate {
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
          data,
          result.validState,
          this.message,
          originalData
        );
      }

      // Success
      if (result.validState) {
        continue;
      }

      // Fail
      return new RunResult(data, false, this.message, originalData);
    }

    return new RunResult(data, true, this.message, originalData);
  }
}
