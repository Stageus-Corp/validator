import { Validate } from '../../types/Validate';

export class RunResult<T extends boolean> {
  constructor(
    public valid: boolean,
    public message: T extends true ? null : string,
    public value: any,
    public original: any
  ) {}

  public async callback(func: Validate.Callback) {
    return await func(this.valid, this.value, this.original, this.message);
  }
}
