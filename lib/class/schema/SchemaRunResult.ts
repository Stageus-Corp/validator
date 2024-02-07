import { ValidateSchema } from '../../../types/ValidateShema';

export class SchemaRunResult<T = any> {
  constructor(
    public valid: boolean,
    public value: T,
    public reason: ValidateSchema.Reason[]
  ) {}
}
