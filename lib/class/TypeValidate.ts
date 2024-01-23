import { Validate } from '..';
import { isNumber } from '../method/isNumber';
import { ValidateMethod } from '../types/ValidateMethod';
import { TaskResult } from './TaskResult';

export class TypeValidate extends Validate {
  protected readonly originalData: any;
  protected optionalState: boolean = false;
  protected validState = true;
  protected message: string | null = null;
  protected taskList: ValidateMethod[] = [];

  constructor(protected data: any, message?: string) {
    super(data, message);
  }

  public optional() {
    this.taskList.push((data) => {
      this.optionalState = true;

      return new TaskResult(true);
    });

    return this;
  }

  isNumber() {
    this.taskList.push(isNumber);

    return this;
  }
}
