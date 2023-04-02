export namespace ButtonThemeEnum {
  export const PRIMARY = 'primary'
  export const SECONDARY = 'secondary'

  export const values = <const>[PRIMARY, SECONDARY]
}

export type ButtonThemeEnum = (typeof ButtonThemeEnum.values)[number]
