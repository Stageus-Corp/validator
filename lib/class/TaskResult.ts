export class TaskResult {
  public originalData: any;

  constructor(
    public readonly validState: boolean = true,
    public readonly data: any,
    public readonly message: string | null = null,
    public readonly forceExit: boolean = false
  ) {
    this.originalData = data;
  }
}
