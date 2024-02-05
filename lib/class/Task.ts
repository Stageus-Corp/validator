import { ValidateMethod } from '../../types/ValidateMethod';

export class Task {
  public argument: any[] = [];
  constructor(public method: ValidateMethod, ...argument: any[]) {
    this.argument = argument;
  }
}
