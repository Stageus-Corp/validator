import { TypeValidate } from './class/validate/TypeValidate';

const validate = new TypeValidate();

const result = validate.isNumber().range({ min: 1 }).run(123);

console.log(result);
