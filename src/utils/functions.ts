import { MethodEnum } from '@/enums';

const separateByThousands = (rawString: string, delimeter: string) =>
  rawString.replace(/\B(?=(\d{3})+(?!\d))/g, `${delimeter}`);

export const kebabToPascalCase = (string: string): string => {
  return string
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export const generateId = (prefix: string = ''): string => `${prefix && `${prefix}-`}${Date.now()}`;

export const wearMask = (rawValue: string | number) =>
  separateByThousands(rawValue.toString(), ' ');

export const removeMask = (formattedValue: string | number) =>
  formattedValue.toString().replace(/\D+/g, '');

export const getKeyFromPath = (path: string): MethodEnum => path.slice(1) as MethodEnum;
