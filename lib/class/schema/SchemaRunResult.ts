import { ValidateSchema } from '../../../types/ValidateShema';

export class SchemaRunResult<T extends boolean> {
  constructor(
    public valid: T,
    public value: any,
    public reason: T extends true ? null : ValidateSchema.Reason[]
  ) {}

  public async callback(cb: ValidateSchema.Callback) {
    return await cb(this.valid, this.reason, this.value);
  }
}
