import { Schema } from '../../../types/Schema';

export class SchemaRunResult<T = any> {
  constructor(
    public valid: boolean,
    public value: T,
    public reason: Schema.Reason[]
  ) {}
}
