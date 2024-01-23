import { RunResult } from './class/RunResult';
import { ValidateMethod } from './types/ValidateMethod';

export class Validate {
  protected readonly originalData: any;
  protected optionalState: boolean = false;
  protected validState = true;
  protected message: string | null = null;
  protected taskList: ValidateMethod[] = [];

  constructor(protected data: any, message?: string) {
    this.originalData = data;
    this.message = message || null;
  }

  public run(data: any) {
    this.data = data;

    for (const task of this.taskList) {
      const result = task(this.data);

      if (this.optionalState && (data === undefined || data === null)) {
        return new RunResult(this.data, true, null);
      }

      if (result.validState) continue;

      this.validState = false;
      if (result.message) this.message = result.message;

      break;
    }

    return {
      data: this.data,
      message: this.message,
      valid: this.validState,
    };
  }

  protected setup<T>(
    data: T,
    valid: boolean,
    message: string | null,
    taskList: ValidateMethod[]
  ) {
    this.data = data;
    this.validState = valid;
    this.message = message || null;
    this.taskList = taskList;
  }
}

const validate = new Validate('asdf');
