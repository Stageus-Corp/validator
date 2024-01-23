import { Validate } from '../types/Validate';

export class RunResult {
  constructor(
    public valid: boolean,
    public message: null | string,
    public data: any,
    public originalData: any
  ) {}

  public async callback(func: Validate.Callback) {
    await func(this.valid, this.data, this.originalData);
  }
}
