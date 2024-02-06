import { ValidateSchema } from '../class/schema/ValidateSchema';

/**
 * Create Validate Schema
 */
export const object = (validateSchema: any) => {
  return new ValidateSchema(validateSchema);
};
