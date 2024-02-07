export namespace ValidateSchema {
  export interface Reason {
    message: string | null;
    field: string | null;
  }

  export type Callback<T> = (value?: T, reason?: Reason[]) => any;
}
