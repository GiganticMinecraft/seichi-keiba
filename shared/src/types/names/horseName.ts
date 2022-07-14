import { Nominal, assertNonBlankString } from '../nominal';

export type HorseName = Nominal<string, 'HorseName'>;
function assertHorseName(v: unknown): asserts v is HorseName {
  assertNonBlankString(v);
}
export const asHorseName = (v: unknown): HorseName => {
  assertHorseName(v);

  return v;
};
