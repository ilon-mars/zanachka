export const kebabToPascalCase = (string: string): string => {
  return string
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export const generateId = (prefix: string = ''): string => `${prefix && `${prefix}-`}${Date.now()}`;
