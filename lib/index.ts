import { TypeValidator } from './class/validate/TypeValidator';

export const message = (message: string | null = null) => {
  return new TypeValidator(message);
};

console.log(
  message()
    .isArray()
    .isAllString()
    .isAllStartWith('1')
    .run(['223', '22344', '2'])
);
