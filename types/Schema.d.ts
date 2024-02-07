export namespace ValidateSchema {
  export interface Reason {
    message: string | null;
    field: string | null;
  }

  export type Callback<T> = (value?: T, reason?: Schema.Reason[]) => any;

  export namespace ArraySchema {
    export interface RunResult {
      valid: boolean;
      message: null | string;
    }
  }
}
