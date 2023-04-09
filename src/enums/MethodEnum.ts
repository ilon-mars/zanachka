export namespace MethodEnum {
  export const CLASSIC = 'classic-envelopes';
  export const JARS = 'jars';
  export const MICROSOFT = 'microsoft';
  export const WEEKLY = 'weekly-envelopes';
  export const EASY = 'easy';

  export const values = <const>[CLASSIC, JARS, MICROSOFT, WEEKLY, EASY];
  export const fixed = <const>[JARS, MICROSOFT, EASY];
  export const notFixed = <const>[CLASSIC, WEEKLY];
}

export type MethodEnum = (typeof MethodEnum.values)[number];

export type FixedMethodEnum = (typeof MethodEnum.fixed)[number];

export type NotFixedMethodEnum = (typeof MethodEnum.notFixed)[number];

export const isFixedMethodEnum = (method: MethodEnum): boolean => method in MethodEnum.fixed;
