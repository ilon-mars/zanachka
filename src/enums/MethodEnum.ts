export namespace MethodEnum {
  export const CLASSIC = 'classic-envelopes'
  export const JARS = 'jars'
  export const MICROSOFT = 'microsoft'
  export const WEEKLY = 'weekly-envelopes'
  export const EASY = 'easy'

  export const values = <const>[CLASSIC, JARS, MICROSOFT, WEEKLY, EASY]
}

export type MethodEnum = (typeof MethodEnum.values)[number]
