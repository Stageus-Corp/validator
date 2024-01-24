export namespace Validate {
  export type Callback = (
    valid?: boolean,
    data?: any,
    originalData?: any
  ) => void;

  export namespace String {
    export type LengthOption =
      | {
          /**
           * The value determines the minimum limit for the string length check
           * @default -Infinity
           */
          min?: number;

          /**
           * The value sets the maximum limit for the string length check
           */
          max: number;
        }
      | {
          /**
           * The value determines the minimum limit for the string length check
           */
          min: number;

          /**
           * The value sets the maximum limit for the string length check
           * @default Infinity
           */
          max?: number;
        };

    export interface IsHanguelOption {
      /**
       * Determines whether Value is a complete hanguel
       * @default false
       */
      complete?: boolean;

      /**
       * Determines whether Value should include a space.
       * @default false
       */
      space?: boolean;
    }

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
}
