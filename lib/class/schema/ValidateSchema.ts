import { Schema } from '../../../types/Schema';
import { Validator } from '../validate/Validator';
import { ArraySchema } from './ArraySchema';

export class ValidateSchema {
  constructor(private readonly validateSchema: any) {}

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
    reason: Schema.Reason[] = [],
    field?: string,
    parentField?: string | null
  ): { valid: boolean; value: T; reason: Schema.Reason[] } {
    let valid = true;

    if (value === null || value === undefined) {
      if (schema !== value) {
        valid = false;
        reason.push({
          message: 'Value is not schema value',
          field: parentField || null,
        });
      }

      return {
        valid: valid,
        value: schema as T,
        reason,
      };
    }

    if (schema instanceof ArraySchema) {
      // Array Type check
      if (!Array.isArray(value)) {
        valid = false;
        reason.push({
          message: 'Value is not array',
          field: parentField || null,
        });

        return {
          valid: valid,
          value,
          reason,
        };
      }

      // Length check
      const lengthCondition =
        value.length >= schema.min && value.length <= schema.max;
      if (!lengthCondition) {
        valid = false;
        reason.push({
          message: `Length of value is out of range ( ${schema.min} ~ ${schema.max} )`,
          field: field || null,
        });

        return {
          valid,
          value: value as T,
          reason,
        };
      }

      // Validate Check
      for (const i in value) {
        const element = value[i];

        if (typeof schema.validateSchema !== typeof element) {
          valid = false;

          reason.push({
            message: `Type of ${this.createFullFieldName(
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

      return {
        valid,
        value: value as T,
        reason,
      };
    }

    if (schema instanceof Validator) {
      const result = schema.run(value);

      if (!result.valid) {
        reason.push({
          message: result.message,
          field: parentField || null,
        });
      }

      return {
        valid: result.valid,
        value: result.value,
        reason,
      };
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
            message: 'Value is not schema value',
            field: parentField || null,
          });
        }

        return {
          valid: valid,
          value: value,
          reason,
        };
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

      return {
        valid: valid,
        value: schema as T,
        reason,
      };
    }

    if (schema !== value) {
      valid = false;
      reason.push({
        message: 'Value is not schema value',
        field: parentField || null,
      });
    }

    return {
      valid: valid,
      value: schema as T,
      reason,
    };
  }

  public run<T = any>(
    value: any
  ): { valid: boolean; value: T; reason: Schema.Reason[] } {
    return this.validate<T>(this.validateSchema, value);
  }
}
