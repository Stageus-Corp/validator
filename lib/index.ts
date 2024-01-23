import { TypeValidator } from './class/validate/TypeValidator';

const validator = (message: string | null = null) => {
  return new TypeValidator(message);
};

const validate = validator()
  .optional()
  .isString()
  .match(/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

console.log(validate.run('joch2712@naver.com'));
