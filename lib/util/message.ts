import { TypeValidator } from '../class/validate/TypeValidator';

export const message = (message?: string | null) => {
  return new TypeValidator(message);
};
