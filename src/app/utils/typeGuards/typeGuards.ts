export const isNil = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isArray = <T>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !isArray(value);
};

export const isEmpty = (value: unknown): boolean => {
  if (isNil(value)) return true;
  if (isString(value) || isArray(value)) {
    return value.length === 0;
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }
  return false;
};

