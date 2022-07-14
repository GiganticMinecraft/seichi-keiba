import { assertFilledString } from './utils/filledString';
import { Nominal } from './utils/nominal';

export type DateString = Nominal<string, 'Date'>;

function assertDateString(v: unknown): asserts v is DateString {
  assertFilledString(v);
}

export const asDateString = (v: unknown): DateString => {
  assertDateString(v);

  return v;
};
