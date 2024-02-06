export class ArraySchema {
  public min: number = -Infinity;
  public max: number = Infinity;
  public lengthErrorMessage?: string;

  constructor(
    public readonly validateSchema: any,
    public readonly message?: string
  ) {}

  public length(
    option: { min?: number; max: number } | { min: number; max?: number },
    message?: string
  ) {
    this.lengthErrorMessage = message;

    if (option.min !== undefined) {
      this.min = option.min;
    }
    if (option.max !== undefined) {
      this.max = option.max;
    }

    return this;
  }
}
