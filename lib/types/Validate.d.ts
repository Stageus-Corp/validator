export namespace Validate {
  export type Callback = (
    valid?: boolean,
    data?: any,
    originalData?: any
  ) => void;

  export interface IsPwOption {
    /**
     * Determines whether the password should include a number.
     * @default true
     */
    number?: boolean;

    /**
     * Determines whether the password should include an uppercase letter.
     * @default false
     */
    uppercase?: boolean;

    /**
     * Determines whether the password should include a special character.
     * @default false
     */
    strong?: boolean;
  }
}
