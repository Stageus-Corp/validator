import { TypeValidator } from './class/validate/TypeValidator';
import { Validate } from './types/Validate';

const validator = (message: string | null = null) => {
  return new TypeValidator(message);
};
