export class Validate {
  constructor(
    protected readonly originalData: any,
    protected data: any,
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null,
    public taskList: Function[]
  ) {
    this.data = originalData;
  }

  public value(data: any) {
    this.data = data;
    this.taskList.forEach((task) => task(this.data));
    return {
      data: this.data,
      validation: this.validation,
    };
  }

  public run(data: any) {
    this.data = data;

    this.taskList.forEach((task) => task(this.data, this.optional));
    return {
      data: this.data,
      validation: this.validation,
    };
  }

  protected getData() {
    console.log('get data');
    return this.data;
  }

  protected checkOptional(): boolean {
    const data = this.getData();

    if (this.optional && (data === undefined || data === null)) {
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
    protected defaultErrorMessage: string | null = null,
    public taskList: Function[] = []
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage, taskList);
  }

  /**
   * Check that value is number
   */
  isNumber() {
    this.taskList.push((data: any) => {
      console.log(data);

      if (!this.getValidation() || this.checkOptional()) {
        return true;
      }

      const condition = typeof data === 'number' && !isNaN(data);
      if (!condition) {
        return false;
      }
    });

    return new NumberValidate(
      this.originalData,
      this.data,
      this.optional,
      this.getValidation(),
      this.errorMessage,
      this.defaultErrorMessage,
      this.taskList
    );
  }

  /**
   * Check that value is array
//    */
  //   isArray() {
  //     if (!this.getValidation() || this.checkOptional()) {
  //       return new ArrayValidate(
  //         this.originalData,
  //         this.data,
  //         this.optional,
  //         this.getValidation(),
  //         this.errorMessage,
  //         this.defaultErrorMessage
  //       );
  //     }

  //     if (!Array.isArray(this.data)) {
  //       this.setValidationFalse('Value is not an array');
  //     }

  //     return new ArrayValidate(
  //       this.originalData,
  //       this.data,
  //       this.optional,
  //       this.getValidation(),
  //       this.errorMessage,
  //       this.defaultErrorMessage
  //     );
  //   }
}

class NumberValidate extends Validate {
  constructor(
    protected readonly originalData: any,
    protected data: number,
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null,
    public taskList: Function[]
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage, taskList);
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
}

class ArrayValidate extends Validate {
  constructor(
    protected readonly originalData: any,
    protected data: any[],
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null,
    public taskList: Function[]
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage, taskList);
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
}

const validator = (data: any, defaultErrorMessage?: string) => {
  const validate = new TypeValidate(data, data, false, true, defaultErrorMessage);

  return validate;
};

validator('asdfjkl').isNumber().excute();

console.log(validator('asdf').isNumber().range({ min: 144 }).run(123));

const body = (fieldName: string) => {
  const validate = new ExpressValidator();

  return validate;
};

const validateMiddleware = () => {
  return (req, res, next) => {};
};

class ExpressValidator extends Validate {
  constructor(
    protected readonly originalData: any,
    protected data: any,
    protected optional: boolean = true,
    protected validation = true,
    protected errorMessage: string | null = null,
    protected defaultErrorMessage: string | null = null,
    public taskList: Function[],
    private method: 'body' | 'query',
    private fieldName: string
  ) {
    super(originalData, data, optional, validation, errorMessage, defaultErrorMessage, taskList);
  }

  run(req: any) {
    const data = req[this.method][this.fieldName];

    const result = this.taskList.map((task) => task(data));
    return {
      data: this.data,
      validation: this.validation,
    };
  }
}
