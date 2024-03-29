import { ValidateSchema } from '../../../types/ValidateShema';
import { object } from '../../util/object';
import { Validator } from '../validate/Validator';
import { ArraySchema } from './ArraySchema';
import { Schema } from './Schema';
import { SchemaRunResult } from './SchemaRunResult';

export class ObjectSchema extends Schema {
  constructor(private readonly validateSchema: any, message?: string) {
    super(message);
  }

  private validate(
    schema: any,
    value: any,
    objectName: string = 'Object'
  ): SchemaRunResult<boolean> {
    // null exception
    if (schema === null || schema === undefined) {
      return new SchemaRunResult(true, schema, null);
    }

    // schema is not object
    if (typeof schema !== 'object' || Array.isArray(schema)) {
      return new SchemaRunResult(true, schema, null);
    }

    // Validator
    if (schema instanceof Validator) {
      const result = schema.run(value);

      if (!result.valid) {
        return new SchemaRunResult(false, value, [
          {
            field: objectName,
            message: result.message as string,
          },
        ]);
      }

      return new SchemaRunResult(true, result.value, null);
    }

    // ArraySchema
    if (schema instanceof ArraySchema) {
      const result = schema.run(value, objectName);

      if (!result.valid) {
        return new SchemaRunResult(
          false,
          value,
          result.reason?.map((reason) => ({
            field: reason.field,
            message: reason.message,
          })) || []
        );
      }

      return new SchemaRunResult(true, result.value, null);
    }

    // ObjectSchema
    if (schema instanceof ObjectSchema) {
      const result = object(schema.validateSchema).run(value, objectName);

      if (!result.valid) {
        return new SchemaRunResult(
          false,
          value,
          result.reason?.map((reason) => ({
            field: reason.field,
            message: reason.message,
          })) || []
        );
      }

      return new SchemaRunResult(true, result.value, null);
    }

    // Object
    let valid = true;
    const reason: ValidateSchema.Reason[] = [];
    if (typeof schema === 'object') {
      const keyList = Object.keys(schema);

      if (!keyList.length) return new SchemaRunResult(true, schema, null);

      const returnValue: any = {};
      for (const key of keyList) {
        const result = this.validate(
          schema[key],
          value?.[key],
          objectName + `.${key}`
        );

        if (!result.valid) {
          valid = false;
          reason.push(
            ...(result.reason?.map((reason) => ({
              message: reason.message,
              field: reason.field,
            })) || [])
          );

          continue;
        }

        returnValue[key] = result.value;
      }

      return new SchemaRunResult(
        valid,
        valid ? returnValue : value,
        valid ? null : reason
      );
    }

    return new SchemaRunResult(true, value, null);
  }

  // Excute valdiation of object validate schema
  public run(
    value: unknown,
    objectName: string = 'Object'
  ): SchemaRunResult<boolean> {
    return this.validate(this.validateSchema, value, objectName);
  }
}
