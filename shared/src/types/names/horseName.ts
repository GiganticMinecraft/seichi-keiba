/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Nonimal, assertNonBlankString } from '../nonimal';

export type HorseName = Nonimal<string, 'HorseName'>;
function assertHorseName(v: unknown): asserts v is HorseName {
  assertNonBlankString(v);
}
export const asHorseName = (v: unknown): HorseName => {
  assertHorseName(v);

  return v;
};
