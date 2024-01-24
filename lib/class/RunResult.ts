import { Validate } from '../../types/Validate';

export class RunResult {
  constructor(
    public valid: boolean,
    public message: null | string,
    public value: any,
    public original: any
  ) {}

  public async callback(func: Validate.Callback) {
    return await func(this.valid, this.value, this.original, this.message);
  }
}
