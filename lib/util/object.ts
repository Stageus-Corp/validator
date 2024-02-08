import { ObjectSchema } from '../class/schema/ObjectSchema';

/**
 * Create Validate Schema
 */
export const object = (validateSchema: any) => {
  return new ObjectSchema(validateSchema);
};
