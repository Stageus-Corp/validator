export namespace Validate {
  export type Callback = (
    valid?: boolean,
    data?: any,
    originalData?: any
  ) => void;
}
