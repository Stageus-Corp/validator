export class Validate {
  constructor(
    protected readonly originalData: any,
    protected data: any,
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null
  ) {
    this.data = originalData;
  }

  protected checkOptional(): boolean {
    if (this.optional && (this.data === undefined || this.data === null)) {
      return true;
    }

    return false;
  }

  protected getValidation(): boolean {
    return this.validation;
  }

  protected setValidationFalse(message: string): void {
    this.validation = false;

    this.setErrorMessage(message);

    return;
  }

  protected setData(data: any) {
    this.data = data;
  }

  private setErrorMessage(message: string) {
    if (this.defaultErrorMessage) {
      this.errorMessage = this.defaultErrorMessage;

      return;
    }

    this.errorMessage = message;

    return;
  }
}

class TypeValidate extends Validate {
  constructor(
    protected readonly originalData: any = undefined,
    protected data: any = undefined,
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage);
  }

  /**
   * Check that value is number
   */
  isNumber() {
    if (!this.getValidation() || this.checkOptional()) {
      return new NumberValidate(
        this.originalData,
        this.data,
        this.optional,
        this.getValidation(),
        this.errorMessage,
        this.defaultErrorMessage
      );
    }

    const condition = typeof this.data === 'number' && !isNaN(this.data);
    if (!condition) {
      this.setValidationFalse('Value is not a number');
    }

    return new NumberValidate(
      this.originalData,
      this.data,
      this.optional,
      this.getValidation(),
      this.errorMessage,
      this.defaultErrorMessage
    );
  }

  /**
   * Check that value is array
   */
  isArray() {
    if (!this.getValidation() || this.checkOptional()) {
      return new ArrayValidate(
        this.originalData,
        this.data,
        this.optional,
        this.getValidation(),
        this.errorMessage,
        this.defaultErrorMessage
      );
    }

    if (!Array.isArray(this.data)) {
      this.setValidationFalse('Value is not an array');
    }

    return new ArrayValidate(
      this.originalData,
      this.data,
      this.optional,
      this.getValidation(),
      this.errorMessage,
      this.defaultErrorMessage
    );
  }

  isString() {
    if (this.checkOptional()) {
    }
  }

  isBoolean() {
    if (this.checkOptional()) {
    }
  }
}

class NumberValidate extends Validate {
  constructor(
    protected readonly originalData: any,
    protected data: number,
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage);
  }

  /**
   * Methods for determining a numeric range
   * @param option min or max option
   */
  range(option: { min: number; max?: number } | { min?: number; max: number }) {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    option.min = option.min || -Infinity;
    option.max = option.max || +Infinity;

    const condition = this.data >= option.min && this.data <= option.max;
    if (!condition) {
      this.setValidationFalse('Value is out of range');
    }

    return this;
  }

  /**
   * Method to check if there is a value in the array
   * @param dataList Number Array
   */
  isIn(dataList: number[]) {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    const condition = dataList.includes(this.data);
    if (!condition) {
      this.setValidationFalse('Value is not included');
    }

    return this;
  }

  /**
   * Method to check if there is not a value in the array
   * @param dataList Number Array
   */
  isNotIn(dataList: number[]) {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    const condition = !dataList.includes(this.data);
    if (!condition) {
      this.setValidationFalse('Value is included');
    }

    return this;
  }

  /**
   * Transform data to Integer
   */
  toInt() {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    this.setData(Math.floor(this.data));

    return this;
  }

  /**
   * Check the data is Integer
   */
  isInt() {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    const condition = Number.isInteger(this.data);
    if (!condition) {
      this.setValidationFalse('Value is not integer');
    }

    return this;
  }

  /**
   * Check the data can be port number
   */
  isPort() {
    if (this.checkOptional()) {
      return this;
    }

    const integerCondition = this.isInt().getValidation();
    if (!integerCondition) {
      return this;
    }

    const portCondition = this.range({ min: 0, max: 65535 }).getValidation();
    if (!portCondition) {
      this.setValidationFalse('Value cannot be port number');
      return this;
    }

    return this;
  }
}

class ArrayValidate extends Validate {
  constructor(
    protected readonly originalData: any,
    protected data: any[],
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage);
  }

  /**
   * Check length of array
   */
  length(option: { min: number; max?: number } | { min?: number; max: number }) {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    const min = option.min || -Infinity;
    const max = option.max || -Infinity;

    const condition = this.data.length <= max && this.data.length >= min;
    if (!condition) {
      this.setValidationFalse('Length of array is invalid');
    }

    return this;
  }

  /**
   * Check string type for all elements of array
   */
  isAllStirng() {
    if (!this.getValidation() || this.checkOptional()) {
      return new StringArrayValidate(
        this.originalData,
        this.data,
        this.optional,
        this.getValidation(),
        this.errorMessage,
        this.defaultErrorMessage
      );
    }

    for (const element of this.data) {
      if (typeof element !== 'string') {
        this.setValidationFalse(`This Value(${element}) is not string type`);
        break;
      }
    }

    return new StringArrayValidate(
      this.originalData,
      this.data,
      this.optional,
      this.getValidation(),
      this.errorMessage,
      this.defaultErrorMessage
    );
  }

  /**
   * Check number type for all elements of array
   */
  isAllNumber() {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    for (const element of this.data) {
      if (typeof element !== 'string') {
        this.setValidationFalse(`This Value(${element}) is not string type`);
        break;
      }
    }

    return this;
  }

  /**
   * custom validator
   */
  isAllIf(func: (data: any) => boolean) {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    for (const element of this.data) {
      if (!func(element)) {
        this.setValidationFalse(`The Value(${element}) is not valid`);
        break;
      }
    }

    return this;
  }
}

class StringArrayValidate extends Validate {
  constructor(
    protected readonly originalData: any,
    protected data: string[],
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage);
  }

  /**
   * Check RegExp for all elements of array
   */
  isAllMatch(regExp: RegExp) {
    if (!this.getValidation() || this.checkOptional()) {
      return this;
    }

    for (const element of this.data) {
      if (!regExp.test(element)) {
        this.setValidationFalse(`The value(${element}) does not fit a regular expression`);
        break;
      }
    }

    return this;
  }
}

const validator = (data: any, defaultErrorMessage?: string) => {
  const validate = new TypeValidate(data, data, false, true, defaultErrorMessage);

  return validate;
};
