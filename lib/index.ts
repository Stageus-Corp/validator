import { TypeValidator } from './class/validate/TypeValidator';

const validator = (message: string | null = null) => {
  return new TypeValidator(message);
};
