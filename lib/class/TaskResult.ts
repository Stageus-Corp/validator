export class TaskResult {
  public original: any;

  constructor(
    public readonly valid: boolean = true,
    public readonly value: any,
    public readonly message: string | null = null,
    public readonly forceExit: boolean = false
  ) {
    this.original = value;
  }
}
