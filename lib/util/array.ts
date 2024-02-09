import { ArraySchema } from '../class/schema/ArraySchema';
import { ObjectSchema } from '../class/schema/ObjectSchema';
import { Validator } from '../class/validate/Validator';
import { object } from './object';

/**
 * Array Validate
 */
export const array = (schemaObject: unknown, message?: string) => {
  if (schemaObject instanceof (Validator || ObjectSchema || Validator)) {
    return new ArraySchema(schemaObject, message);
  }

  return new ArraySchema(object(schemaObject), message);
};
