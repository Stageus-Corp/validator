import { TypeValidator } from './class/validate/TypeValidator';

const validator = (message: string | null = null) => {
  return new TypeValidator(message);
};

const portValidator = validator()
  .optional()
  .isArray()
  .isAllIf((element) => {
    if (element < 0) {
      return false;
    }

    return true;
  });

console.log(portValidator.run([1, 2, 3, -1]));
