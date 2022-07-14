export const isString = (v: unknown): v is string => typeof v === 'string';

export function assertString(v: unknown): asserts v is string {
  if (!isString(v)) throw new Error('The value must be string');
}
