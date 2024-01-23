import { RunResult } from '../RunResult';
import { Task } from '../Task';

export class Validate {
  constructor(
    protected data: any = null,
    protected message: null | string = null,
    protected optionalState: boolean = false,
    protected validState: boolean = true,
    protected taskList: Task[] = [],
    protected originalData: null | any = null
  ) {
    if (!this.originalData) {
      this.originalData = data;
    }
  }

  public run(data: any) {
    this.data = data;

    for (const task of this.taskList) {
      const result = task.method(this.data, ...task.argument);

      if (this.optionalState && (data === undefined || data === null)) {
        return new RunResult(this.data, true, null);
      }

      if (result.validState) continue;

      this.validState = false;
      if (result.message) this.message = result.message;

      break;
    }

    return new RunResult(this.data, this.validState, this.message);
  }
}
