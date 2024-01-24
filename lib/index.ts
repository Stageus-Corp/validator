import { TypeValidator } from './class/validate/TypeValidator';

export const validator = (message: string | null = null) => {
  return new TypeValidator(message);
};
