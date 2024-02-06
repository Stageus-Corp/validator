export class ArraySchema {
  public min: number = -Infinity;
  public max: number = Infinity;

  constructor(public readonly validateSchema: any) {}

  public length(
    option: { min?: number; max: number } | { min: number; max?: number }
  ) {
    if (option.min !== undefined) {
      this.min = option.min;
    }
    if (option.max !== undefined) {
      this.max = option.max;
    }

    return this;
  }
}
