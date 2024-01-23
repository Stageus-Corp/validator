export class RunResult {
  constructor(
    public data: any,
    public valid: boolean,
    public message: null | string,
    public originalData: any
  ) {}
}
