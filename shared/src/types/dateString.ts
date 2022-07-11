import { Nonimal, assertNonBlankString } from './nonimal';

export type DateString = Nonimal<string, 'Date'>;
function assertDateString(v: unknown): asserts v is DateString {
  assertNonBlankString(v);
}
export const asDateString = (v: unknown): DateString => {
  assertDateString(v);

  return v;
};
