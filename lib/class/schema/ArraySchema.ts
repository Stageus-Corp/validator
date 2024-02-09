import { ValidateSchema } from '../../../types/ValidateShema';
import { Validator } from '../validate/Validator';
import { ObjectSchema } from './ObjectSchema';
import { Schema } from './Schema';
import { SchemaRunResult } from './SchemaRunResult';

export class ArraySchema extends Schema {
  private min: number = -Infinity;
  private max: number = Infinity;
  private lengthErrorMessage?: string;

  constructor(
    public readonly validateSchema: Validator | ObjectSchema | ArraySchema,
    message?: string
  ) {
    super(message);
  }

  private lengthCheck(value: unknown[]): boolean {
    const condition = value.length >= this.min && value.length <= this.max;
    if (!condition) {
      return false;
    }

    return true;
  }

  /**
   * Set array length
   */
  public length(
    option: { min?: number; max: number } | { min: number; max?: number },
    message?: string
  ) {
    this.lengthErrorMessage = message;

    if (option.min !== undefined) {
      this.min = option.min;
    }
    if (option.max !== undefined) {
      this.max = option.max;
    }

    return this;
  }

  /**
   * Set array validate error message
   */
  public message(message?: string) {
    this.errorMessage = message;
  }

  /**
   * Excute array valiation
   */
  public run(
    value: any,
    arrayName: string = 'Array'
  ): SchemaRunResult<boolean> {
    if (!Array.isArray(value)) {
      return new SchemaRunResult(false, value, [
        {
          message: this.errorMessage || 'Value is not array',
          field: arrayName || 'Array',
        },
      ]);
    }

    const lengthCondition = this.lengthCheck(value);
    if (!lengthCondition) {
      return new SchemaRunResult(false, value, [
        {
          message: this.lengthErrorMessage || 'Length of Array is out of range',
          field: arrayName || 'Array',
        },
      ]);
    }

    const reason: ValidateSchema.Reason[] = [];
    let valid = true;
    const returnValue = [];
    for (const i in value) {
      const element = value[i];

      // Validator
      if (this.validateSchema instanceof Validator) {
        const result = this.validateSchema.run(element);

        if (!result.valid) {
          valid = false;
          reason.push({
            message: result.message,
            field: arrayName + `[${i}]`,
          });
          continue;
        }

        returnValue.push(result.value);
        continue;
      }

      // Array Schema
      if (this.validateSchema instanceof ArraySchema) {
        const result = this.validateSchema.run(element, `${arrayName}[${i}]`);

        if (!result.valid) {
          valid = false;
          const reasonList: ValidateSchema.Reason[] =
            result.reason?.map((reason) => ({
              message: reason.message,
              field: reason.field,
            })) || [];
          reason.push(...reasonList);
          continue;
        }

        returnValue.push(result.value);
        continue;
      }

      // Object Schema
      if (this.validateSchema instanceof ObjectSchema) {
        const result = this.validateSchema.run(element, `${arrayName}[${i}]`);

        if (!result.valid) {
          valid = false;
          const reasonList =
            result.reason?.map((reason) => ({
              message: reason.message,
              field: reason.field,
            })) || [];
          reason.push(...reasonList);
          continue;
        }

        returnValue.push(result.value);
        continue;
      }
    }

    return new SchemaRunResult(
      valid,
      valid ? returnValue : value,
      valid ? null : reason
    );
  }
}
