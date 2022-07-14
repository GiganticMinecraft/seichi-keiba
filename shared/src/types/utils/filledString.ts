import { isString, assertString } from './assertString';
import { Nominal } from './nominal';

export type FilledString = Nominal<string, 'FilledString'>;

const isFilledString = (v: unknown): v is string => isString(v) && v !== '';

export function assertFilledString(v: unknown): asserts v is FilledString {
  assertString(v);

  if (!isFilledString(v)) throw new Error('The value must not be empty string');
}
