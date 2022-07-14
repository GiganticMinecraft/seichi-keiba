import { Nominal, assertNonBlankString } from './nominal';

export type DateString = Nominal<string, 'Date'>;
function assertDateString(v: unknown): asserts v is DateString {
  assertNonBlankString(v);
}
export const asDateString = (v: unknown): DateString => {
  assertDateString(v);

  return v;
};
