import { ValidateSchema } from '../../../types/ValidateShema';

export class SchemaRunResult<T extends boolean> {
  constructor(
    public valid: T,
    public value: any,
    public reason: T extends true ? null : ValidateSchema.Reason[]
  ) {}
}
