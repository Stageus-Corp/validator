import { Validator } from '../validate/Validator';

export class ValidateSchema {
  constructor(private readonly validateSchema: any) {}

  private validate(
    schema: any,
    value: any,
    reason: string[] = []
  ): { valid: boolean; value: any; reason: string[] } {
    let valid = true;

    if (schema instanceof Validator) {
      const result = schema.run(value);
      return {
        valid: result.valid,
        value: result.value,
        reason,
      };
    }

    if (!Array.isArray(schema) && typeof schema === 'object') {
      const keyList = Object.keys(schema);

      if (!keyList.length) {
        return {
          valid: true,
          value: {},
          reason,
        };
      }

      for (const key of keyList) {
        const oneOfSchema = schema[key];

        const validateResult = this.validate(oneOfSchema, value?.[key], reason);

        if (oneOfSchema instanceof Validator && !validateResult.valid) {
          reason.push(key);
        }

        schema[key] = validateResult.value;
        valid = valid && validateResult.valid;
      }
    }

    return {
      valid: valid,
      value: schema,
      reason,
    };
  }

  public run(value: any) {
    return this.validate(this.validateSchema, value);
  }
}
