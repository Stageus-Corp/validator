import { ArraySchema } from '../class/schema/ArraySchema';

/**
 * Array Validate
 */
export const array = (validateSchema: any) => {
  return new ArraySchema(validateSchema);
};
