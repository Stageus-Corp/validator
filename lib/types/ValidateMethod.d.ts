export type ValidateMethod = (
  data: any,
  optional: boolean,
  valid: boolean
) => { valid: boolean; message: null | string } | true;
