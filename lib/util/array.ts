import { ArraySchema } from '../class/schema/ArraySchema';

/**
 * Array Validate
 */
export const array = (validateSchema: any, message?: string) => {
  return new ArraySchema(validateSchema, message);
};
