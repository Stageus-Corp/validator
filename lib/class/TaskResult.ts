export class TaskResult {
  constructor(
    public readonly validState: boolean,
    public readonly message: null | string = null
  ) {}
}
