import { ObjectSchema } from '../class/schema/ObjectSchema';

/**
 * Create Validate Schema
 */
export const object = (validateSchema: any, message?: string) => {
  return new ObjectSchema(validateSchema, message);
};
