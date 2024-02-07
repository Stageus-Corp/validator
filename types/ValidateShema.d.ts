export namespace ValidateSchema {
  export interface Reason {
    message: string | null;
    field: string;
  }

  export type Callback<T> = (value?: T, reason?: Reason[]) => any;
}
