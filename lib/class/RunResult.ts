export class RunResult {
  constructor(
    public valid: boolean,
    public message: null | string,
    public data: any,
    public originalData: any
  ) {}
}
