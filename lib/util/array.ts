import { ArraySchema } from '../class/schema/ArraySchema';
import { ObjectSchema } from '../class/schema/ObjectSchema';
import { Validator } from '../class/validate/Validator';

/**
 * Array Validate
 */
export const array = (
  schemaObject: Validator | ObjectSchema | ArraySchema,
  message?: string
) => {
  return new ArraySchema(schemaObject, message);
};
