import { ValidateSchema } from '../../../types/ValidateShema';
import { Validator } from '../validate/Validator';
import { ArraySchema } from './ArraySchema';
import { SchemaRunResult } from './SchemaRunResult';

export class ObjectSchema<T = any> {
  private falseFunc: ValidateSchema.Callback<T> | null = null;
  private trueFunc: ValidateSchema.Callback<T> | null = null;

  constructor(
    private readonly validateSchema: any,
    private readonly message?: string
  ) {}

  private createFullFieldName(
    key?: string,
    parentKey?: string | null
  ): string | null {
    if (!key) {
      return null;
    }

    if (!key && !parentKey) {
      return null;
    }

    if (!parentKey) {
      return key;
    }

    return `${parentKey}.${key}`;
  }

  private validate<T>(
    schema: { [key: string]: any },
    value: any,
    reason: ValidateSchema.Reason[] = [],
    field?: string,
    parentField?: string | null
  ): SchemaRunResult {
    let valid = true;

    if (schema === null || schema === undefined) {
      if (schema !== value) {
        valid = false;
        reason.push({
          message: this.message || 'Value is not schema value',
          field: parentField || null,
        });
      }

      return new SchemaRunResult(valid, schema as T, reason);
    }

    if (schema instanceof ArraySchema) {
      // Array Type check
      if (!Array.isArray(value)) {
        valid = false;
        reason.push({
          message: schema.errorMessage || 'Value is not array',
          field: parentField || null,
        });

        return new SchemaRunResult(valid, value, reason);
      }

      // Length check
      const lengthCondition =
        value.length >= schema.min && value.length <= schema.max;
      if (!lengthCondition) {
        valid = false;
        reason.push({
          message:
            schema.lengthErrorMessage ||
            `Length of value is out of range ( ${schema.min} ~ ${schema.max} )`,
          field: field || null,
        });

        return new SchemaRunResult(valid, value, reason);
      }

      // Validate Check
      for (const i in value) {
        const element = value[i];

        if (typeof schema.validateSchema !== typeof element) {
          valid = false;

          reason.push({
            message:
              this.message ||
              `Type of ${this.createFullFieldName(
                (field || 'Array') + `[${i}]`,
                parentField
              )} is invalid`,
            field: this.createFullFieldName(
              (field || 'Array') + `[${i}]`,
              parentField
            ),
          });
        } else {
          const validateResult = this.validate(
            schema.validateSchema,
            element,
            [],
            (field || 'Array') + `[${i}]`,
            this.createFullFieldName((field || 'Array') + `[${i}]`, parentField)
          );

          if (!validateResult.valid) {
            valid = false;
            reason.push(...validateResult.reason);
          }
        }
      }

      return new SchemaRunResult(valid, value, reason);
    }

    if (schema instanceof Validator) {
      const result = schema.run(value);

      if (!result.valid) {
        reason.push({
          message: result.message,
          field: parentField || null,
        });
      }

      return new SchemaRunResult(result.valid, result.value, reason);
    }

    if (!Array.isArray(schema) && typeof schema === 'object') {
      const keyList = Object.keys(schema);

      if (!keyList.length) {
        // value is not {}
        if (
          !(
            !Array.isArray(value) &&
            typeof value === 'object' &&
            Object.keys(value).length === 0
          )
        ) {
          valid = false;
          reason.push({
            message: this.message || 'Value is not schema value',
            field: parentField || null,
          });
        }

        return new SchemaRunResult(valid, value, reason);
      }

      for (const key of keyList) {
        const oneOfSchema = schema[key];
        const validateResult = this.validate(
          oneOfSchema,
          value?.[key],
          reason,
          key,
          this.createFullFieldName(key, parentField)
        );

        schema[key] = validateResult.value;
        valid = valid && validateResult.valid;
      }

      return new SchemaRunResult(valid, schema, reason);
    }

    if (schema !== value) {
      valid = false;
      reason.push({
        message: this.message || 'Value is not schema value',
        field: parentField || null,
      });
    }

    return new SchemaRunResult<T>(valid, schema as T, reason);
  }

  public run<T = any>(value: any): SchemaRunResult {
    const validateResult = this.validate<T>(this.validateSchema, value);

    if (!validateResult.valid && this.falseFunc) {
      this.falseFunc(validateResult.value, validateResult.reason);
    }

    if (validateResult.valid && this.trueFunc) {
      this.trueFunc(validateResult.value, validateResult.reason);
    }

    return validateResult;
  }

  public true(func: ValidateSchema.Callback<T>) {
    this.trueFunc = func;

    return this;
  }

  public false(func: ValidateSchema.Callback<T>) {
    this.falseFunc = func;

    return this;
  }
}
