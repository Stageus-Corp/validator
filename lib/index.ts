import { TypeValidator } from './class/validate/TypeValidator';

export const message = (message: string | null = null) => {
  return new TypeValidator(message);
};
