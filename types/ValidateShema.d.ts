export namespace ValidateSchema {
  export interface Reason {
    message: string | null;
    field: string;
  }

  export type Callback = (
    valid?: boolean,
    reason?: Reason[] | null,
    value?: any
  ) => any;
}
