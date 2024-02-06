import { ValidateSchema } from '../class/schema/ValidateSchema';

/**
 * Create Validate Schema
 */
export const object = (validateSchema: any, message?: string) => {
  return new ValidateSchema(validateSchema, message);
};
