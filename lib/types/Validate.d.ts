export namespace Validate {
  export type Callback = (
    valid?: boolean,
    message?: string,
    value?: any,
    original?: any
  ) => any;

  export namespace Number {
    export interface IsNumberOption {
      /**
       * Strict about the type of value input
       * @default false
       */
      strict?: boolean;
    }
  }

  export namespace String {
    export interface IsStringOption {
      /**
       * Whether to convert to String type by allowing a number as well
       * @default false
       */
      allowNumber?: boolean;
    }

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

  export namespace Array {
    export interface IsArrayOption {
      /**
       * Strict about the type of value input
       * @default false
       */
      strict?: boolean;
    }

    export type LengthOption =
      | {
          /**
           * The value determines the minimum limit for the arrary length check
           * @default -Infinity
           */
          min?: number;

          /**
           * The value sets the maximum limit for the arrary length check
           */
          max: number;
        }
      | {
          /**
           * The value determines the minimum limit for the arrary length check
           */
          min: number;

          /**
           * The value sets the maximum limit for the arrary length check
           * @default Infinity
           */
          max?: number;
        };
  }

  export namespace Boolean {
    export interface IsBooleanOption {
      /**
       * Strict about the type of value input
       * @default false
       */
      strict?: boolean;
    }
  }
}
